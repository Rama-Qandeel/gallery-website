import React,{ useState, useEffect } from 'react';
import useStorage from './useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { progress, url } = useStorage(file);  
  console.log(progress, url);
  
useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  
    return (
        <div className="progress-bar" style={{width:`${progress}%`}}>
        <p className="progress-bar__download">{progress}%</p> 
        </div>
      );
    } 
    
 export default ProgressBar;