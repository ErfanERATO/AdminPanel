import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/main-app-style.scss";
import "./assets/styles/content-style.scss";
import router from "./router";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {router.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <route.layout>
                    <route.component />{" "}
                  </route.layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
