import { useAuth0 } from '@auth0/auth0-react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import React from 'react'
function Sign()
{
    const {isAuthenticated,user}=useAuth0;

    return(
   <main style>
    {isAuthenticated &&
    <Grid container>
     <Grid sx={{mx:1}}>
        <TextField id="username" label="name" value={user?.username} variant ="outlined" fullWidth></TextField>
     </Grid>
     <Grid sx={{mx:1}}>
        <TextField id="email" label="email" value={user?.email} variant="outlined" fullWidth></TextField>
     </Grid>
     <Grid sx={{mx:1}}>
        <TextField id="password" label="password" value={user?.password} variant="outlined" fullWidth></TextField>
     </Grid>
     
    </Grid>
    }
   </main>
    );
}

export default Sign;
