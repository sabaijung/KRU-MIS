import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Authentication from "../pages/authentication/Authentication";

export const PublicRoute = [
  {
    id: "0",
    path: "/",
    element: <Home />,
  },
  {
    id: "1",
    path: "/home",
    element: <Home />,
  },
  {
    id: "2",
    path: "/about",
    element: <About />,
  },
  {
    id: "3",
    path: "/contact",
    element: <Contact />,
  },
  {
    id: "4",
    path: "/authentication",
    element: <Authentication />,
  },
];
