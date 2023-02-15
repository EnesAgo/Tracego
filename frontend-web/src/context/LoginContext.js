import React, { useState, createContext, useEffect } from "react";

export const LoginContext = createContext()

export const LoginContextProvider = props => {
    const [isLogedIn, setIsLogedIn] = useState(false)

    useEffect(() => {
        if(localStorage.jwt){
            setIsLogedIn(true)
        }
    }, [])


    return (
        <LoginContext.Provider value={[isLogedIn, setIsLogedIn]}>
            {props.children}
        </LoginContext.Provider>
    )
}