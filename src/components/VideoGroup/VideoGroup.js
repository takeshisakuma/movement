import React from "react";
import Style from "./VideoGroup.module.scss";

const VideoGroup = ({ children }) => {
  return (
    <div className={Style.container}>
      <div className={Style.inner}>{children}</div>
    </div>
  );
};

export default VideoGroup;
