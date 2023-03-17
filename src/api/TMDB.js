import axiosClient from "./axios";
import { useQuery, QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const useTrading = () => {
  return useQuery("trading", async () => {
    const { data, isLoading, error } = await axiosClient.get("/movie/550");
    return [data,isLoading,error];
  });
};

export const useInTheater = () => {
  return useQuery("inTheater", async () => {
    const { data, isLoading, error } = await axiosClient.get("/movie/550");
    return [data,isLoading,error];
  });
};

export const useNew = () => {
  return useQuery("new", async () => {
    const { data, isLoading, error } = await axiosClient.get("/movie/550");
    return [data,isLoading,error];
  });
};

export const getPoster = (poster_id) => {
  const path = `https://image.tmdb.org/t/p/w500/${poster_id}`
  return path
}