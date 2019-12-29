import Home from '../pages/Home';
import NeonHeart from '../pages/NeonHeart';
import CreateAccount from '../pages/Login/createAccount';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/dash';
import Login from '../pages/Login';

const routes = [
{
	path: '/',
	component: Home,
},
{
	path: '/neon',
	component: NeonHeart,
},
{
	path: '/login',
	component: Login,
},
{
	path: '/create',
	component: CreateAccount,
},
{
	path: '/signUp',
	component: SignUp,
},
{
	path: '/dash',
	component: Dashboard,
}

];

export default routes;