import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout.tsx";
import ErrorPage from "./component/page/404/index.tsx";
import About from "./component/page/About/index.tsx";
import Contact from "./component/page/Contact/index.tsx";
import Github from "./component/page/Github/index.tsx";
import HomePage from "./component/page/HomePage/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "git-hub",
        element: <Github />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
