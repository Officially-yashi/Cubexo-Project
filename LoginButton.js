import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


    const LoginButton=()=>{
    const {LoginWithRedirect}=useAuth0();
    return(
   <button onClick={()=>LoginWithRedirect()}>Log In</button>
    );
    };
    export default LoginButton;
