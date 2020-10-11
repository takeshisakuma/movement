import axios from "axios";

const KEY = "AIzaSyCwVgNLXfzEhAblkTBWx1GC-lGezCiI0c8";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

const params = {
  part: "snippet",
  maxResults: 10,
  key: KEY,
  regionCode: "JP",
  type: "video",
};

export const fetchPlaylistData = async () => {
  return await youtube.get("/playlistItems", {
    params: {
      ...params,
      playlistId: "PLOrFWVDIbHLHKyKMxWuv8ujknACOkgC4N",
      order: "date",
    },
  });
};

export const fetchSelectedData = async (id) => {
  return await youtube.get("videos", {
    params: {
      ...params,
      id,
    },
  });
};
