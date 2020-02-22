import Home from "../pages/Home";
// import NeonHeart from "../pages/NeonHeart";
// import CreateAccount from "../pages/createAccount";
import SignUp from "../pages/SignUp";
import CheckIn from "../pages/CheckIn";
// import Dashboard from "../pages/dash";
// import Login from "../pages/Login";

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
    path: "/checkin",
    component: CheckIn
  }
];

export default routes;
