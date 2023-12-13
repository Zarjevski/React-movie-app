import client from "../api/client.js";
import logger from "../utils/logger.js";

export const getImages = async (type, id) => {
  try {
    const data = (await client.get(`/${type}/${id}/images`))?.data;
    return data;
  } catch (error) {
    logger.log("error", error);
  }
};
