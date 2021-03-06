/**
 * @author Lukas Pietzschmann, Vincent Ugrai
 *
 * This File is the Entrypoint in our Project.
 * All Routes are specified here.
 */

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
import AreaChoice from './components/AreaChoicePage/AreaChoice';
import ExerciseAreaTypes from './components/ExerciseAreaTypes/ExerciseAreaTypes';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Login from './components/Profile/Login';
import Register from './components/Profile/Register';
import AllGroups from './components/AllGroups/AllGroups';
import Group from './components/SingleGroup/Group';
import GroupInvitation from './components/SingleGroup/GroupInvitation';
import NotFound from './components/NotFound';
import useUser from './hooks/useUser';
import UserPlans from './components/UserPlans/UserPlans';
import Licenses from './components/Licenses';
import ShopSearch from './components/Shop/ShopSearch';

function App() {
	const [token, uid] = useUser();

	if (!(token && uid))
		return (
			<Router>
				<Switch>
					<Route exact path={['/', '/login']}>
						<Login className='mx-auto mt-5' style={{ width: 'clamp(400px, 35vw, 1000px)' }} />
					</Route>
					<Route exact path='/register'>
						<Register className='mx-auto mt-5' style={{ width: 'clamp(400px, 35vw, 1000px)' }} />
					</Route>
					<Route exact path='/Licenses'>
						<Licenses className='m-5' />
					</Route>
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/' component={FrontPage}></Route>
				<Route exact path='/groups' component={AllGroups} />
				<Route exact path='/shop' component={ShopSearch} />
				<Route exact path='/groups/:group_id' component={Group} />
				<Route exact path='/groups/:group_id/join' component={GroupInvitation} />
				<Route exact path='/area' component={AreaChoice} />
				<Route exact path='/area/:area_id' component={ExerciseAreaTypes} />
				<Route exact path='/plan' component={UserPlans} />
				<Route exact path='/profile'>
					<Profile className='mx-3' />
				</Route>
				<Route exact path='/login'>
					<Login className='mx-auto mt-5' style={{ width: 'clamp(400px, 35vw, 1000px)' }} />
				</Route>
				<Route exact path='/register'>
					<Register className='mx-auto mt-5' style={{ width: 'clamp(400px, 35vw, 1000px)' }} />
				</Route>
				<Route exact path='/Licenses'>
					<Licenses className='m-5' />
				</Route>
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
