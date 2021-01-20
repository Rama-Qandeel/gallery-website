import React from 'react';
import useStorage from './useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { progress, url } = useStorage(file);  
//   console.log(progress, url);
  
  
  
    return (
     <div>Progress</div>
      );
    } 
    
 export default ProgressBar;