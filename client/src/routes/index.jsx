import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Live from "../pages/Live";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/signUp",
    component: SignUp
  },
  {
    path: "/live",
    component: Live
  }
];

export default routes;
