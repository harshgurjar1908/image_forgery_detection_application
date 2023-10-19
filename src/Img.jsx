import React from "react";
import "./img.css";

function Img() {
  return (
    <>
      <div className="resultimages">
        <div className="org">
          <h1 className="orghead">Preview of Original Image</h1>
          <img
            src="resaved.jpg"
            alt="uploaded image"
            width="500px"
            height="500px"
          />
        </div>
        <div className="ela">
          <h1 className="elahead">Preview of ELA Image</h1>
          <img
            src="img.jpg"
            alt="uploaded image"
            width="500px"
            height="500px"
          />
        </div>
      </div>
    </>
  );
}

export default Img;
