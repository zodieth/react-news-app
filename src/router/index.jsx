import { createBrowserRouter } from "react-router-dom";
import Detail from "../views/Detail";
import Home from "../views/Home";
import Landing from "../views/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/new/:title",
    element: <Detail />,
  },
]);
