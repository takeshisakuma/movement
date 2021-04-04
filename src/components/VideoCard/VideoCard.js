import React from "react";
import Style from "./VideoCard.module.scss";
import { Link } from "react-router-dom";

const VideoCard = ({ src, title, position, videoid, playlistid }) => {
  return (
    <Link
      to={{
        pathname: "watch",
        search: `?v=${videoid}&list=${playlistid}&index=${position}`,
      }}
      className={Style.item}
    >
      <div>
        <img className={Style.thumbnail} src={src} alt={title} />
        <p className={Style.title}>{title}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
