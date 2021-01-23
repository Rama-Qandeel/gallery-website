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
      
        <form className="form" >
        <h1 className="heading-secondary">Your Pictures</h1>
        <p className="paragraph-secondary">Upload Your Picture</p>
        <label className="form__label">
        <input className="form__input" type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="form__output">
      <div className="form__error">{ error }</div>
      <div>{file?(<p>{file.name}</p>):(null)}</div> 
      <div className="form__progress">{file && <ProgressBar file={file} setFile={setFile}/>}</div> 
       </div>
        </form>
   
    );
  };

  export default Upload;