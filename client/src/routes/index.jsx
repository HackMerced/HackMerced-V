import Home from '../pages/home';
import NeonHeart from '../pages/NeonHeart';
import Login from '../pages/login';
import CreateAccount from '../pages/login/createAccount';

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
}
];

export default routes;