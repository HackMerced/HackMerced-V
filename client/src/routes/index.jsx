import Home from '../pages/home';
import NeonHeart from '../pages/NeonHeart';
import Dashboard from "../pages/dashboard";

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
	path: '/dashboard',
	component: Dashboard,
}
];

export default routes;