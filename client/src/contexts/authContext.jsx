import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import Path from "../utils/paths";
import { getUserData } from "../utils/util";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        let persistedState = getUserData();

        if (persistedState) {
            return persistedState;
        }

        return {};
    });
       
    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);
            setAuth(result);
    
            navigate(Path.Home);
        } catch (error) {
            throw error;
        }
    }

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authService.register(values.firstName, values.lastName, values.email, values.password);
            setAuth(result);

            navigate(Path.Home);
        } catch (error) {
            throw error;
        }
    }

    const logoutHandler = () => {
        setAuth({});
    }
    
    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        isAuth: !!auth.accessToken,
        userId: auth._id,
        email: auth.email,
        fullName: `${auth.firstName} ${auth.lastName}`,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;