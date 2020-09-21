import React, {useState} from 'react';

const UploadForm = () => {
  
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpg', 'image/jpeg'];

  const changeHandler = (e) => {
    let selectedFile = e.target.files[0];
    console.log(selectedFile);
    if(selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  }

  return (
    <form>
      <input type="file" onChange={changeHandler}/>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  )
}

export default UploadForm;