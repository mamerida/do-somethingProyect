import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginComponent from "./LoginComponent/LoginComponent";
import SignInComponent from "./SignInComponent/SignInComponent";
import MainComponent from "./MainComponent/MainComponent";
import Errorpage from "./ErrorPage/ErrorPage";
import { ProtectedRoute } from "./ProtectionURLComponent/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><MainComponent /></ProtectedRoute>,
    errorElement: <Errorpage />
  },
  {
    path: "/login",
    element: <LoginComponent />,
  },
  {
    path: "/signin",
    element: <SignInComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
