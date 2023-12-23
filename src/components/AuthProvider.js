import React, {createContext, useState} from "react";
import Auth from "../screens/Auth";

export const AuthContext = createContext({
    user: null,
    setUser: () => {}
})

const AuthProvider= ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            {user ? children : <Auth />}
        </AuthContext.Provider>
    );
}


export default AuthProvider;