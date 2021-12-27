import React, { useState } from "react";
import "../styles/Home.module.scss";
import Webcam from "react-webcam";
import Image from 'next/image'
export default function ScreenTwo(props) {
  const webcamRef = React.useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);

  let capture = React.useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    const imagesCopy = [...props.images];
    imagesCopy.push(image);
    props.setImages(imagesCopy);
    setIsSuccess(true);
  }, [webcamRef]);


console.log(props.images);
  return (
    <div>
      {!isSuccess ? (
        <div>
          <div className="content">
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          </div>

          <button onClick={capture} className="button btn">
            Neem een foto
          </button>
          {/* {capturing ? (
      <button onClick={handleStopCaptureClick}>Stop de opname</button>
    ) : (
      <button onClick={handleStartCaptureClick}>Start de opname</button>
    )}
    {recordedChunks.length > 0 && (
      <button onClick={handleDownload}>download de video</button>
    )} */}
        </div>
      ) : (
        <>
          <img src={props.images.at(-1)} />
          <br />
          <button
            className="button btn-1"
            onClick={() => {
              props.setScreenSwitch(0);
              props.setImages([]);
            }}
          >
            Terug
          </button>
          <button
            className="button btn-2"
            onClick={() => {
              props.setScreenSwitch(0);
              props.setImages(props.images);
            }}
          >
            Foto is goed
          </button>
          <button
            className="button btn-3"
            onClick={() => {
              setIsSuccess(false);
              props.setImages([]);
            }}
          >
            Foto opnieuw
          </button>
        </>
      )}
    </div>
  );
}
