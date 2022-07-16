import Router from "next/router";
import { useState, useEffect } from "react";

//Hook Method
export function useUser() {
    const [user, setUser] = useState<object | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const {userDetails, authStatus} = getUserDetails();
        
        if (!authStatus) Router.push('/sign-in');

        setUser(userDetails);
        setIsAuthenticated(authStatus);
    }, []);

    return {user, isAuthenticated};
}

function getUserDetails() {
    const token = localStorage.getItem('token');
    if (!token) return { userDetails: null, authStatus: false };;
    const user: object = JSON.parse(localStorage.getItem('user') || '');
    return { userDetails: user, authStatus: true };
}