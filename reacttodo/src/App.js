import React from 'react';
import AuthenticatedRoute from "auth/AuthenticatedRoute";
import AdminLayout from "layouts/Admin.js";
import { Switch } from "react-router-dom";


export default function App() {
 
  
    return (
      <div className="App">
       
        <Switch>
      
         
          <AuthenticatedRoute
            path="/admin"
            component={AdminLayout}
          />
        
        
        </Switch>
      </div>
    );
  } 
