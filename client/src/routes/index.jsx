import Home from "../pages/Home";
import CreateAccount from "../pages/createAccount";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/dash";
import Login from "../pages/Login";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/create-account",
    component: CreateAccount
  },
  {
    path: "/sign-up",
    component: SignUp
  },
  {
    path: "/dashboard",
    component: Dashboard
  }
];

export default routes;
