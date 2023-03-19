import axiosClient from "./axios";
import { useQuery, QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const usePopular = () => {
  return useQuery("trading", async () => {
    try {
      const { data, isLoading, error } = await axiosClient.get(
        "/movie/popular"
      );
      if (error) {
        console.log(error);
      }
      return [data, error, isLoading];
    } catch (error) {
      console.error(error);
    }
  });
};

export const useComingSoon = () => {
  return useQuery("comingSoon", async () => {
    try {
      const { data, isLoading, error } = await axiosClient.get(
        "/movie/upcoming"
      );
      if (error) {
        console.log(error);
      }
      return [data, error, isLoading];
    } catch (error) {
      console.error(error);
    }
  });
};

export const useNew = () => {
  return useQuery("new", async () => {
    try {
      const { data, isLoading, error } = await axiosClient.get("/movie/550");
      if (error) {
        console.log(error);
      }
      return [data, error, isLoading];
    } catch (error) {
      console.error(error);
    }
  });
};

export const useMovieById = (id) => {
  return useQuery("movie", async () => {
    try {
      const { data, error, isLoading } = await axiosClient.get(`/movie/${id}`);
      if (error) {
        console.log(error);
      }
      return [data, error, isLoading];
    } catch (error) {
      console.error(error);
    }
  });
};

export const getPoster = (poster_id) => {
  const path = `https://image.tmdb.org/t/p/original/${poster_id}`;
  return path;
};
