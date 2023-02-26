import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const PublicRouteV1 = [
  {
    path: "/",
    name: "/Home",
    element: <Home />,
  },
  {
    path: "/home",
    name: "/Home",
    element: <Home />,
  },
  {
    path: "/about",
    name: "/About",
    element: <About />,
  },
  {
    path: "/contact-us",
    name: "/Contact US",
    element: <Contact />,
  },
];
