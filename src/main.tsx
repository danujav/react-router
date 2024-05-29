import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout.tsx";
import ErrorPage from "./component/page/404/index.tsx";
import About from "./component/page/About/index.tsx";
import Contact from "./component/page/Contact/index.tsx";
import HomePage from "./component/page/HomePage/index.tsx";
import News from "./component/page/News/index.tsx";

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
        path: "news",
        element: <News />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
