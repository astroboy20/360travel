"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchItems = ({ url }) => {
  const token = "";
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      try {
        const response = await axios.get(url, { headers });
        return response.data;
      } catch (error) {
        console.log(error?.response?.status, "codebro");
        if (
          token &&
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          router.push("/login");
        }
        throw new Error(
          error?.response?.data?.message || "Error fetching data"
        );
      }
    },
    staleTime: 3 * 1000,
  });
};
