import "../styles/Home.module.scss";
import React, { useState }  from "react";
import ScreenOne from "../components/ScreenOne";
import ScreenTwo from "../components/ScreenTwo";
export default function Home() {

  const { v4: uuidv4 } = require('uuid');
  const [screenSwitch, setScreenSwitch] = useState(0);
  const [images, setImages] = useState([]);

  return (
    <>
    { screenSwitch ===  0 ? (
      <div>
        <div className="is-flex is-flex-wrap-wrap">
          { images && (
            images.map(item => (
              <div>
                  <img className="image  custom" key={ uuidv4() } src={item} />
              </div>
            ))
          )}
        </div>

        <ScreenOne setScreenSwitch={setScreenSwitch} />
      </div>
    ) : screenSwitch === 1 ? (
      <ScreenTwo setScreenSwitch={setScreenSwitch} images={images} setImages={setImages}/>
    ) : (
      <ScreenOne setScreenSwitch={setScreenSwitch}  />
    )}
    </>
  );
}
