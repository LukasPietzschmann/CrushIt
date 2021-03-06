/**
 * @author Lukas Pietzschmann, Johannes Schenker
 */

import { useEffect, useState } from 'react';

import useUser from '../../hooks/useUser';
import { axiosInstance, hash } from '../../constants';

/**
 * This Component is used to Login a existing User. It is shown under /login or / if no User is logged in.
 * @param className The className always gets forwarded to the Top-Level Element of the Component. This enables Styling 'from outside'.
 * @param style The style gets forwarded to the Top-Level Element of the Component. This enables Styling with attributes 'from outside'.
 */
function Login({ className, style }) {
	const [uname, setUName] = useState('');
	const [passwd, setPasswd] = useState('');
	const [error, setError] = useState(null);

	const [token, uid] = useUser();

	useEffect(() => {
		if (token && uid)
			axiosInstance.get(`/user/${uid}`, { headers: { Token: token } })
				.then(({ data }) => setError(`You (${data.uname}) are already logged in!`))
				.catch(err => console.error(err));
	}, [token, uid]);

	return (
		<div className={`${className}`} style={style}>
			<h1 className='display-3 text-center'>Login</h1>
			<form>
				<div className='form-group'>
					<label>Username</label>
					<div className='input-group mb-3'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>@</span>
						</div>
						<input className='form-control' placeholder='Enter Username' value={uname} onChange={e => setUName(e.target.value)}/>
					</div>
				</div>
				<div className='form-group'>
					<label>Password</label>
					<input className='form-control' type='password' placeholder='Enter Password' value={passwd} onChange={e => setPasswd(e.target.value)}/>
				</div>
			</form>
			<div className='text-center'>
				<button className='btn btn-success btn-disabled' disabled={token && uid} onClick={() => {
					axiosInstance.post('/login', {uname: uname, password: hash(passwd)}, {withCredentials: true})
						.then((r) => {window.location.href = '/';console.log(r)})
						.catch(err => {
							console.error(err);
							if (err.response && err.response.status === 400)
								setError(err.response.data);
						});
				}}>Login</button>
				</div>
			<div className='text-center text-danger m-2'>{error}</div>
			<div className='text-center m-4'><a href='/register'>No Account yet? Register here!</a></div>
		</div>
	);
}


export default Login;