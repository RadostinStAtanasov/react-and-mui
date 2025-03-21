import { createContext, use, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {

    const [auth, setAuth] = useState([]);

    const login = (authData) => {
        setAuth(authData);
    }

    const contextData = {
        ...auth,
        login
    };


    return (

        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const contextData = useContext(AuthContext);

    return contextData;
}