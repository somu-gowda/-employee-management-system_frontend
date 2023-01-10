import { Fragment } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Employees from "./components/Dashboard/Employees";
import LoginForm from "./components/LoginPages/LoginForm";
import Registration from "./components/LoginPages/Registration";

// History
import history from "./history";
import Page404 from "./components/Page404";

// Page roots
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm  history={history} />,
  },
  {
    path: "/signup",
    element: <Registration history={history} />,
  },
  {
    path: "/employees",
    element: <Employees  history={history} />,
  },
  {
    path: "/page-not-found",
    element: <Page404 />,
  }
]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} history={history} />
    </Fragment>
  );
}

export default App;
