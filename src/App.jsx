import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Navigate } from "react-router-dom";
import WelcomePage from "./screen/WelcomePage";
import Login from "./screen/auth/Login";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./screen/user/HomePage";
import UserTabel from "./screen/user/table";
import Create from "./screen/user/table/Create";
import Edit from "./screen/user/table/Edit";
import Register from "./screen/auth/Register";
import NotFound from "./screen/NotFound";

function App() {
  const queryClient = new QueryClient();
  const allRoutes = () => {
    const token = false;
    const publicRoutes = [
      {
        path: "/",
        exact: true,
        element: <WelcomePage />,
      },
      {
        path: "*",
        exact: true,
        element: <NotFound />,
      },
    ];
    const privateRoutesUser = [
      {
        path: "/login",
        exact: true,
        element: !token ? <Login /> : <Navigate to={"/dashboard"} />,
        errorElement: <h1>ada sesuatu yang error</h1>,
      },
      {
        path: "/register",
        exact: true,
        element: !token ? <Register /> : <Navigate to={"/dashboard"} />,
        errorElement: <h1>ada sesuatu yang error</h1>,
      },
      {
        path: "/dashboard",
        exact: true,
        element: token ? <HomePage /> : <Navigate to={"/login"} />,
        errorElement: <h1>ada sesuatu yang error</h1>,
      },
      {
        path: "/user/table",
        exact: true,
        element: token ? <UserTabel /> : <Navigate to={"/login"} />,
        errorElement: <h1>ada sesuatu yang error</h1>,
      },
      {
        path: "/user/table/create",
        exact: true,
        element: token ? <Create /> : <Navigate to={"/login"} />,
        errorElement: <h1>ada sesuatu yang error</h1>,
      },
      {
        path: "/user/table/edit/:id",
        exact: true,
        element: token ? <Edit /> : <Navigate to={"/login"} />,
        errorElement: <h1>ada sesuatu yang error</h1>,
      },
    ];
    return [...publicRoutes, ...privateRoutesUser];
  };

  const appRoutes = allRoutes();
  const router = createBrowserRouter([...appRoutes]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

// return (
// );
