import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getOne } from "../services/user";
import { auth } from "../services/auth";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const[user, setUser] = useState(null);
    const[isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        const userId = window.localStorage.getItem('userId');
        if(!token){
            setIsAuthenticated(false);
        }else{
            setIsAuthenticated(true);
            getOne(userId)
                .then(setUser)
                .catch((err) => console.error(err));
        }
    }, []);

    const authenticate = (user) => {
        const{ ci, nombre, apellido, email, is_superuser} = user;
        setUser({ ci, nombre, apellido, email, is_superuser});
        setIsAuthenticated(true);

        window.localStorage.setItem('userId', user.user.ci);
        window.localStorage.setItem('token', user.token);
    };

    const signIn = async (body) => {
        try {
            const res = await auth(body);
            if(res.status_code !== 201) throw new Error(res?.message);
            authenticate(res);
            
            if(res.user.is_superuser){
                navigate('/Admin')
            }else{
                navigate('/User')
            }
        } catch (err) {
            console.error(err)
        }
    };

    const signUp = () => {
        setIsAuthenticated(false);
    };

    const logout = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        setUser(null);
        setIsAuthenticated(false);
        navigate('/')
    };

    const vars = {
        isAuthenticated,
        user,
        signIn,
        signUp,
        logout,
        user,
    };
    return <AuthContext.Provider value={vars}>{children}</AuthContext.Provider>
}