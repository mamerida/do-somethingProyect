import { Navigate } from "react-router-dom";
import { IsUserLoged } from "../utils/localHost";

export const ProtectedRoute = ({ children }) => {
    if (!IsUserLoged()) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
