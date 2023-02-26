import ShowProject from "../private-pages/project/ShowProject";
import FormProject from "../private-pages/project/FormProject";

import ShowEmp from "../private-pages/employee/ShowEmp";
import FormEmp from "../private-pages/employee/FormEmp";

export const PrivateRoute = [
  {
    id: "0",
    path: "/",
    element: <FormProject />,
  },
  {
    id: "1",
    path: "/show-project",
    element: <ShowProject />,
  },
  {
    id: "2",
    path: "/form-project",
    element: <FormProject />,
  },
  {
    id: "3",
    path: "/show-employee",
    element: <ShowEmp />,
  },
  {
    id: "4",
    path: "/form-employee",
    element: <FormEmp />,
  },
];
