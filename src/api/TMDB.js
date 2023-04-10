import axiosClient from "./axiosClient";

export const getData = async (path, page = 1) => {
  try {
    const response = await axiosClient.get(path, { params: { page } });
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (type, id) => {
  try {
    const response = await axiosClient.get(`/${type}/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getSimilar = async (type, id) => {
  try {
    const response = await axiosClient.get(`/${type}/${id}/similar`);
    const data = await response.data.results;
    return data;
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

export const getMedia = async (id) => {
  try {
    const response = await axiosClient.get(`/movie/${id}/images`);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPoster = (poster_id) => {
  const path = `https://image.tmdb.org/t/p/original/${poster_id}`;
  return path;
};

export const getVideos = async (id, type) => {
  try {
    const response = await axiosClient.get(`/${type}/${id}/videos`);
    const results = await response.data.results;
    console.log(response.data);
    if (results && results[0].site === "YouTube") {
      return `https://www.youtube.com/embed/${results[0].key}`;
    } else if (!results) {
      console.log(results);
    }
  } catch (error) {
    console.error(error);
  }
};
