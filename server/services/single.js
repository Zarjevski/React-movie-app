import client from "../api/client.js";
import { getVideos } from "./getVideos.js";
import logger from "../utils/logger.js";
import { getImages } from "./getImages.js";

export const single = async (type, id) => {
  try {
    const details = await client.get(`/${type}/${id}`, {
      params: { language: "he" },
    });
    const photos = await getImages(type, id)
    const videos = await getVideos(type, id);
    return {
      success: true,
      details: details.data,
      photos: photos,
      videos: videos,
    };
  } catch (error) {
    logger.log("error", error);
    return { success: false };
  }
};
