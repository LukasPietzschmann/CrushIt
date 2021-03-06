'''
Authors: Lukas Pietzschmann, Johannes Schenker, Vincent Ugrai
'''

# FIXME Behebe möglichen fehler mit Flask:
# https://github.com/flask-restful/flask-restful/pull/913
# import flask.scaffold
# flask.helpers._endpoint_from_view_func = flask.scaffold._endpoint_from_view_funcfrom flask import Flask, request, make_response
from flask import Flask, request, make_response
from flask_cors import CORS
from dotenv import load_dotenv
from os import environ as env
import requests
import json


app = Flask(__name__)
CORS(app, supports_credentials=True)

# The Proxy receives all API-Requests and forwards them to the corresponding service
@app.route('/<path:path>', methods=["GET", "POST", "PUT", "DELETE"])
def proxy(path):
	base = None
	port = None
	body = None
	method = {"GET": requests.get, "POST": requests.post, "PUT": requests.put, "DELETE": requests.delete}
	if path.startswith("user") or path.startswith("group") or path.startswith("login") or path.startswith("logout"):
		port = env.get("USER_GROUP_PORT")
		base = env.get("USER_GROUP_BASE")
	elif path.startswith("workoutPlan") or path.startswith("category"):
		port = env.get("WORKOUT_PORT")
		base = env.get("WORKOUT_BASE")
	elif path.startswith("wikiHow"):
		port = env.get("WIKI_HOW_PORT")
		base = env.get("WIKI_HOW_BASE")
	elif path.startswith("shoppingsearch"):
		port = env.get("SHOPPING_PORT")
		base = env.get("SHOPPING_BASE")
	else:
		return "The Proxy is not aware of this URL", 404
	if request.method in ["POST", "PUT"]:
		try:
			body = request.get_json() if request.content_type == "application/json" else json.loads(request.get_data().decode("utf-8"))
		except json.decoder.JSONDecodeError:
			body = None
	res = method[request.method](f"{base}:{port}/{path}", json=body, headers=request.headers)
	response = make_response((res.text, res.status_code, res.headers.items()))
	if cookies := res.cookies:
		for (name, val) in cookies.get_dict().items():
			response.set_cookie(key=name, value=val, secure=False, max_age=360 * 60 * 60 * 24)

	return response


if __name__ == '__main__':
	load_dotenv()
	app.run(host="0.0.0.0", debug=True)