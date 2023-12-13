import client from "../api/client.js";
import logger from "../utils/logger.js";

export const byCategory = async (type, category, page = 1) => {
  try {
    const response = await client.get(`/${type}/${category}`, {
      params: {
        page: page,
        language: "he"
      },
    });
    return { success: true, shows: response.data };
  } catch (error) {
    logger.log("error", error);
    return { success: false };
  }
};
