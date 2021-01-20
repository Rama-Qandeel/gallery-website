import React, { useState } from 'react';
import Upload from './components/Upload';
import ImageGrid from './components/ImageGrid';
import './App.css';

const App =()=> {
 
  return (
      <div>
       <Upload/>
    <ImageGrid/>
      </div>
    );
  }

  export default App;


