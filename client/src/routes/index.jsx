import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Live from "../pages/Live";

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/signUp",
    component: SignUp
  },
  {
    path: "/live",
    component: Live
  },
  {
    path: "**",
    component: Home
  }
];

export default routes;
