import Home from '../pages/home';
import NeonHeart from '../pages/NeonHeart';
import Login from '../pages/login';
import SignUp from '../pages/signUp';
import Dashboard from '../pages/dash';

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
	path: '/signUp',
	component: SignUp,
},
{
	path: '/dash',
	component: Dashboard,
}

];

export default routes;