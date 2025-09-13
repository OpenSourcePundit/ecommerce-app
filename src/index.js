import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import { DataContext, DataProvider} from "./Contexts/dataContext";
import { AuthContext, AuthProvider} from "./Contexts/authcontext/authcontext";
import { ScrollToTop } from "./Utils/scrollToTop";


// Call make Server
makeServer();
export {DataContext};
export {AuthContext};


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
    <DataProvider>
      <ScrollToTop/>
      <App />
    </DataProvider>
    </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
