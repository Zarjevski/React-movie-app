import axiosClient from "./axios";
import { useQuery, QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const useTrading = () => {
  return useQuery("trading", async () => {
    const { data } = await axiosClient.get("/movie/550");
    return data;
  });
};

