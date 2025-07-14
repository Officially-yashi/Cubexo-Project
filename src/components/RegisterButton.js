import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const RegisterButton=()=>{
    const {RegisterWithRedirect}=useAuth0;
    return(
<button onClick={()=>RegisterWithRedirect()}>Register</button>
    );
}
export default RegisterButton;