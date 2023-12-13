import client from "../api/client.js";

// get videos service function prioratizing hebrew videos

export const getVideos = async (type, id) => {
  let videosArr = [];
  try {
    const response = await client.get(`/${type}/${id}/videos`, {
      params: {
        language: "he",
      },
    });
    const results = await response.data.results;
    if (results.length === 0) {
      const newResponse = await client.get(`/${type}/${id}/videos`);
      videosArr = newResponse.data.results;
    } else {
      videosArr = results;
    }
  } catch (error) {
    throw new Error("had trouble to get the videos");
  }
  const youtubeVideos = videosArr.filter((video) => video.site == "YouTube");
  const modifidedArr = youtubeVideos.map((video) => {
    video.video_url = `https://www.youtube.com/embed/${video.key}`;
    return video;
  });
  return modifidedArr;
};
