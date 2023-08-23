import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Tour = ({ id, name, info, image, price }) => {
  const { removeTour } = useGlobalContext();
  const [showInfo, setShowInfo] = useState(false);
  const headingLength = name.length > 35 ? 80 : 100;
  return (
    <article className="single-tour">
      <img src={image} alt="" className="img" />
      <p className="tour-price">{price}</p>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{showInfo ? info : info.substring(0, headingLength) + " ..."}</p>
        <button className="info-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "show less" : "show more"}
        </button>
      </div>
      <button className="delete-btn btn btn-block" onClick={() => removeTour(id)}>
        not interested
      </button>
    </article>
  );
};

export default Tour;
