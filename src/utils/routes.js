import { Navigate } from "react-router-dom";
import HomePage from "../screen/HomePage";
import Login from "../screen/auth/Login";
import WelcomePage from "../screen/WelcomePage";

export const getAllRoutes = () => {
  const token = false;
  const publicRoutes = [
    {
      path: "/",
      exact: true,
      component: () => <WelcomePage />,
    },
  ];
  const privateRoutes = [
    {
      path: "/login",
      exact: true,
      component: () => (!token ? <Login /> : <Navigate to={"/homepage"} />),
    },
    {
      path: "/homepage",
      exact: true,
      component: () => (token ? <HomePage /> : <Navigate to={"/login"} />),
    },
  ];
  return [...publicRoutes, ...privateRoutes];
};
