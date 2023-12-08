import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import * as authService from "../../services/authService";
import Path from "../../utils/paths";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);
    const loggedOut = useRef(false)

    useEffect(() => {
        if (loggedOut.current) {
            return;
        }
 
        loggedOut.current = true;

        authService.logout()
            .then(() => {
                logoutHandler();

                navigate(Path.Home);
            })
            .catch(() => {
                logoutHandler();

                navigate(Path.Login)
            });
        
    }, [])

    return null;
}