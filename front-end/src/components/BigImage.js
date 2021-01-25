import React from "react";

const BigImage = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  const handleClick2 = (e) => {
    setSelectedImg(null);
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt=" pic" />
      <button className="btn__close" onClick={handleClick2}>
        x
      </button>
    </div>
  );
};

export default BigImage;
