import React from "react";
import "./css/Technology.css";
import dolby from "../src/img/dolby.png";
import imax from "../src/img/imax.png";
import nec from "../src/img/nec.png";
import jbl from "../src/img/jbl.png";

const Technology: React.FC = () => {
  return (
    <div className="techno-box">
      <div className="dolby">
        <img src={dolby} alt="" />
      </div>
      <div className="imax">
        <img src={imax} alt="" />
      </div>
      <div className="nec">
        <img src={nec} alt="" />
      </div>
      <div className="jbl">
        <img src={jbl} alt="" />
      </div>
    </div>
  );
};

export default Technology;
