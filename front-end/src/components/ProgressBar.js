import React, { useState, useEffect } from "react";
import useStorage from "./useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="progress-bar__download">
        <p>{progress}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
