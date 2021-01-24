import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Upload from './components/Upload';
import ImageGrid from './components/ImageGrid';
import Login from './components/Login';
import Register from "./components/Register"
import './App.css';
import './icon-font.css'
import Home from './components/Home';
import Navbar2 from './components/Navbar2';
import Photos from './components/Photos'
import BigImage from './components/BigImage';
import Navbar from './components/Navbar';

const App =()=> {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Router>
     <Route
        exact
        path="/"
        render={(props) => (
          <div>
           <Home/>
          </div>
        )}
      />
     <Route
        exact
        path="/login"
        render={(props) => (
          <div>
            <Navbar/>
            <Login {...props} />
          </div>
        )}
      /> 
      <Route
        exact
        path="/register"
        render={(props) => (
          <div>
            <Navbar/>
            <Register {...props} />
          </div>
        )}
      /> 
<Route
        exact

        path="/photos"
        render={(props) => (
          <div>
            <Navbar2/>
           <Photos setSelectedImg={setSelectedImg}/>
           { selectedImg && (
        <BigImage selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
          </div>
        )}
      /> 
<Route
        exact
        path="/profile"
        render={(props) => (
          <div>
            <Navbar2/>
            <Upload/>
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && (
        <BigImage selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
          </div>
        )}
      />
      </Router>
    );
  }

  export default App;


