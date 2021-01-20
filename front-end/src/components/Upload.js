import React, { useState  } from 'react';
import ProgressBar from './ProgressBar';


const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  }; 
  
  
  
  return (
      <div className="section-about">
        <form >
        <input type="file" onChange={handleChange} />
      <div >{ error }</div>
      <div>{file?(<p>{file.name}</p>):(null)}</div> 
      <div>{file && <ProgressBar file={file} setFile={setFile}/>}</div> 
        </form>
      </div>
    );
  };

  export default Upload;