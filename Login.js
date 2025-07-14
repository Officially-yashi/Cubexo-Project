import {useAuth0} from '@auth0/auth0-react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
function Login()
{
    const {isAuthenticated,user}=useAuth0;
    return(
        <main style>
            {isAuthenticated &&
            <Grid container>
                <Grid container justifyContent="center">
                    <Grid sx={{mx:1}}>
                        <TextField id="username" label="Username" value={user?.username} variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} sx={{mx:1}}> 
                        <TextField  id="password" label="Password" value={user?.password} variant="outlined" fullWidth/>
                    </Grid>
                </Grid>
            </Grid>
            }
        </main>
    )
}

export default Login;