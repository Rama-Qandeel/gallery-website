import React, { useState  } from 'react';


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
      <div>
        <form>
        <input type="file" onChange={handleChange} />
      <div >{ error }</div>
      <div>{file?(<p>{file.name}</p>):(null)}</div> 
        </form>
      </div>
    );
  };

  export default Upload;