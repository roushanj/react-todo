import React from "react";
import {  Route } from "react-router-dom";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import routes from "routes.js";
import { AppBar, Toolbar } from "@material-ui/core";

export default function Dashboard(props) {
 
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  

  return (
    <div >
      <AppBar style={{background:"#148f74"}} >
        <Toolbar  />  
      </AppBar>
      <div >{getRoutes(routes)}</div>
    </div>  
  );
}

