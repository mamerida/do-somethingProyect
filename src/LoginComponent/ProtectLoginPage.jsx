import { Navigate } from "react-router-dom";
import { IsUserLoged } from "../utils/localHost";
import LoginComponent from "./LoginComponent";

export const ProtectedRouteLogin = () => {
    if (IsUserLoged()) {
        return <Navigate to="/" replace />;
    }
    return <LoginComponent />;
};
