import "./App.css";
import Main from "./layout/Main";
import PrivateMainLayout from "./layout/private/PrivateMainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoute } from "./route/Route";
import { PrivateRoute } from "./route/PrivateRoute";

function App() {
  let accessType = 1;
  return (
    <BrowserRouter>
      {accessType == 0 ? (
        <Main>
          <Routes>
            {PublicRoute.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
          </Routes>
        </Main>
      ) : (
        <PrivateMainLayout>
          <Routes>
            {PrivateRoute.map((item) => (
              <Route key={item.id} path={item.path} element={item.element} />
            ))}
          </Routes>
        </PrivateMainLayout>
      )}
    </BrowserRouter>
  );
}

export default App;
