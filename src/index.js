import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInComponent from "./SignInComponent/SignInComponent";
import MenuComponent from "./MenuComponent/MenuComponent";
import Errorpage from "./ErrorPage/ErrorPage";
import { ProtectedRoute } from "./ProtectionURLComponent/ProtectedRoute";
import { ProtectedRouteLogin } from "./LoginComponent/ProtectLoginPage";
import HomePageComponent from "./HomePageComponent/HomePageComponent";
import ListOfSomethingComponent from "./ListOfSomethingComponent/ListOfSomethingComponent";
import { Provider } from "react-redux";
import store from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Provider store={store} ><MenuComponent /></Provider></ProtectedRoute>,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute><HomePageComponent /></ProtectedRoute>
      },
      {
        path: "activitiesToDo",
        element: <ListOfSomethingComponent />,
      },
    ],
  },
  {
    path: "/login",
    element: <ProtectedRouteLogin />,
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
