import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import {BrowserRouter,Link as RouterLink,Route,Routes } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import Login from './components/Login';
import Sign from './components/Sign';
import RegisterButton from './components/RegisterButton';
function App() {
  
  
      const {isAuthenticated,logout}=useAuth0();
      return(
        
         <BrowserRouter basename="/react-auth0">
         <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Sign />}/>

         </Routes>
         </BrowserRouter>
        
        
      )
      
}

export default App;
