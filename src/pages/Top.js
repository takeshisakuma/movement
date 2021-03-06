import React, { useEffect, useContext } from "react";
import Layout from "../components/Layout/Layout";
import { fetchPlaylistData } from "../apis/index";
import { Store } from "../store/index";
import VideoGroup from "../components/VideoGroup/VideoGroup";
import VideoCard from "../components/VideoCard/VideoCard";
import Limit from "../components/Limit/Limit";
const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);

  useEffect(() => {
    fetchPlaylistData()
      .then((res) => {
        setGlobalState({
          type: "SET_PLAYLIST",
          payload: { playlist: res.data.items },
        });
      })
      .catch(() => {
        setGlobalState({
          type: "SET_LIMIT",
          payload: { limit: true },
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
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
      {globalState.limit && <Limit />}
    </Layout>
  );
};

export default Top;
