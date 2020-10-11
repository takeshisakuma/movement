import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import VideoDetail from "../components/VideoDetail/VideoDetail";
import { Store } from "../store/index";
import { useLocation } from "react-router-dom";
import { fetchSelectedData } from "../apis/index";
import VideoGroup from "../components/VideoGroup/VideoGroup";
import VideoCard from "../components/VideoCard/VideoCard";

const Watch = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setVideos = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    if (id) {
      const selected = await fetchSelectedData(id);
      setGlobalState({
        type: "SET_SELECTED",
        payload: { selected: selected.data.items.shift() },
      });
    }
  };

  useEffect(() => {
    setVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <Layout>
      <VideoDetail />

      <VideoGroup>
        {globalState.playlist &&
          globalState.playlist.map((playlist) => {
            return (
              <VideoCard
                key={playlist.snippet.position}
                src={playlist.snippet.thumbnails.standard.url}
                title={playlist.snippet.title}
                position={playlist.snippet.position}
                videoid={playlist.snippet.resourceId.videoId}
                playlistid={playlist.snippet.playlistId}
              />
            );
          })}
      </VideoGroup>
    </Layout>
  );
};

export default Watch;
