import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { About}  from "../pages/About";
import { Logement } from "../pages/Logement";
import { Error } from "../pages/Error";

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
    path: "/logement/:logementId", // logement est lié a n'importe quoi, ceci est une variable//
    element: <Logement />,
  },
  {
    path: "*",
    element: <Error />
  }
]);

export default router;
