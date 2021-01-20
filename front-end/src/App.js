import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Upload from './components/Upload';
import ImageGrid from './components/ImageGrid';
import Login from './components/Login';
import './App.css';

const App =()=> {
 
  return (
    <Router>
     
     <Route
        exact
        path="/login"
        render={(props) => (
          <div>
            <Login {...props} />
          </div>
        )}
      /> 

<Route
        exact
        path="/profile"
        render={(props) => (
          <div>
             <Upload/>
            <ImageGrid/>
          </div>
        )}
      />

     
      
      </Router>
    );
  }

  export default App;


