import axiosClient from "./axiosClient";

export const getData = async (path, page = 1) => {
  try {
    const response = await axiosClient.get(path, {
      params: { page, language: "he" },
    });
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (type, id) => {
  try {
    const response = await axiosClient.get(`/${type}/${id}`, {
      params: { language: "he" },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getSeasonDetails = async (id, season) => {
  try {
    const response = await axiosClient.get(`/tv/${id}/season/${season}`, {
      params: { language: "he" },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSearchResult = async (search, page) => {
  try {
    const movieResponse = await axiosClient.get("/search/movie", {
      params: { page, query: search },
    });
    const tvResponse = await axiosClient.get("/search/tv", {
      params: { page, query: search },
    });
    const movieResults = await movieResponse.data.results;
    const tvResults = await tvResponse.data.results;
    return [...movieResults, ...tvResults];
  } catch (error) {
    console.error(error);
  }
};

export const getCast = async (type, id) => {
  try {
    const response = await axiosClient.get(`/${type}/${id}/credits`);
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getMedia = async (type, id, media) => {
  try {
    const response = await axiosClient.get(`/${type}/${id}/${media}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getVideos = async (id, type) => {
  try {
    const response = await axiosClient.get(`/${type}/${id}/videos`, {
      params: { language: "he" },
    });
    const results = await response.data.results;
    if (results.length === 0) {
      try {
        const response = await axiosClient.get(`/${type}/${id}/videos`, {
          params: { language: "en" },
        });
        const results = await response.data.results;
        if (results && results[0].site === "YouTube") {
          return `https://www.youtube.com/embed/${results[0].key}`;
        }
      } catch (error) {
        console.log("error with trailer in english", error);
      }
    } else if (results && results[0].site === "YouTube") {
      return `https://www.youtube.com/embed/${results[0].key}`;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};

export const getPoster = (poster_id) => {
  const path = `https://image.tmdb.org/t/p/original/${poster_id}`;
  return path;
};
