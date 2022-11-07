import React from "react";
import {
    Button, 
} from "@chakra-ui/react";
import Profile from './profile.js'

const LoginButton = () => {
    //console.log('wh')
    return (
        <>
        <button onClick={() => Profile}> click</button>

        <a href="/api/auth/login">Login</a>
        </>
    ); 
}
export default LoginButton; 