import { useContext } from "react";
import AuthContext from "../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";
import Path from "../utils/paths";

export default function GuestGuard() {
    const { isAuth } = useContext(AuthContext);
    
    if (isAuth) {
        return <Navigate to={Path.Home} />;
    }

    return <Outlet />
}