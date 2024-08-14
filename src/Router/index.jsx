import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/a-propos",
    element: <About />,
  },
  {
    path: "/logement",
    element: <Logement />,
  },
]);

export default router;
