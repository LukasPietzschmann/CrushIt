/**
 * @author Lukas Pietzschmann
 */

import { useState, useEffect } from 'react';
import { axiosInstance } from '../../constants';
import useUser from '../../hooks/useUser';
import Accordion from '../Accordion/Accordion';

/**
 *
 * @param className The className always gets forwarded to the Top-Level Element of the Component. This enables Styling 'from outside'.
 * @param name The Name of the Unit.
 * @param rep The number of repetitions of the Unit.
 * @param finished A List containing another List containing UIDs of the Users who have already finished the Unit. Theres one inner List per Unit.
 * @param i The Index of the Unit in finished.
 * @param unit_id The ID of the Unit.
 * @param group_id The ID of the Group.
 * @param plan_id The ID of the Plan.
 */
function UnitCard({ className, name, rep, finished, i, unit_id, group_id, plan_id }) {
	const [token, uid] = useUser();
	const [finishedNames, setFinishedNames] = useState([]);
	const [data, setData] = useState(null);

	useEffect(() => {
		axiosInstance.get(`/wikiHow/${name}`)
			.then(({ data }) => setData(data))
			.catch(err => console.error(err));
	}, [name]);

	useEffect(() => {
		if (!finished || !finished[i])
			return
		let pArr = [];
		finished[i].map(member => pArr.push(axiosInstance.get(`/user/${member}/name`)));
		Promise.allSettled(pArr).then(results => setFinishedNames(results.map(({ value }) => value.data)));
	}, [finished, i]);

	return (
		<div className={`card ${className}`}>
			{data ? <Accordion className={`${finished[i].includes(uid) ? 'border border-success' : ''} bg-light`} title={`${name} (${rep} Iteration${rep > 1 ? 's' : ''}) ${finishedNames.length >= 1 ? "Finished by: " + finishedNames.join(", ") : ''}`} >
				<ul className='list-group'>
					{data.map(({ summary, description }, i) => {return (
						<div key={i} className='card my-2'>
							<div className='card-body'>
								<h5 className='card-title'>{summary}</h5>
								<div className='card-text'>{description}</div>
							</div>
						</div>
					)})}
				</ul>
				{!finished[i].includes(uid) ? <button className='btn btn-success btn-block' onClick={() => {
					axiosInstance.put(`/group/${group_id}/plan/${plan_id}`, { "unit_id": unit_id, "uid": uid, "finished": true }, { headers: { Token: token, uid: uid } })
						.then(res => console.log(res))
						.catch(err => console.error(err.response));
				}}>Mark as done</button> :
					''}
			</Accordion> : 'loading...'}
		</div>
	);
}

export default UnitCard;