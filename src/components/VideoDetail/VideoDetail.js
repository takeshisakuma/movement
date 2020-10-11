import React, { useContext } from "react";

import { Store } from "../../store/index";

import { VideoPlay } from "../VideoPlay/VideoPlay";
import Style from "./VideoDetail.module.scss";
//import Linkify from "react-linkify";

const VideoDetail = () => {
  const { globalState } = useContext(Store);

  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p className={Style.title}>{globalState.selected.snippet.title}</p>
    </div>
  ) : (
    <span>no data</span>
  );
};

export default VideoDetail;
