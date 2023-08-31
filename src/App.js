import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './App.css';
import { exportComponentAsJPEG } from 'react-component-export-image';

function App() {
  const webcamRef = useRef(null);
  const imageRef = useRef(null);
  const [imgURL, setImgURL] = useState(null)
  const [buttonText, setButtonText] = useState("Click Photo")
  const handleClick =()=>{
    if(!imgURL){
      setImgURL(webcamRef.current.getScreenshot())
      setButtonText("Retake")
    }
    else{
      setImgURL(null)
      setButtonText("Click Photo")
    }
  }
  const downloadImage=()=>{
    const fileName = 'custom_image_name.jpg';
    exportComponentAsJPEG(imageRef, fileName);
  }
  return (
    <div className="App">
      {
        !imgURL?
         <Webcam ref={webcamRef} />
        :
        <img ref={imageRef} src={imgURL} alt="" />
      }
      <button onClick={handleClick} >{buttonText}</button>
      {imgURL && <button className='download' onClick={downloadImage} >Download Image</button>}
    </div>
  );
}

export default App;
