import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom/client';

import {Auth0Provider} from '@auth0/auth0-react'

const domain="yashika";
const auth_clientid="0873yp";

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Auth0Provider domain="yashika" auth_clientid='0873yp' authorizationParams={{redirect_uri:window.location.origin,}}>
    <App />
  </Auth0Provider>
  

  
);

