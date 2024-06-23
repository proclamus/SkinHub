import React from "react";
import "./components/style.css";
import { routers } from "./router/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
