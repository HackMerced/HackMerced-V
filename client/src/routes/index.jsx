import Home from '../pages/home';
import NeonHeart from '../pages/NeonHeart';
import CreateAccount from '../pages/login/createAccount';
import SignUp from '../pages/signUp';
import Dashboard from '../pages/dash';
import Login from '../pages/login';

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