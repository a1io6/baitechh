import { useQuery } from "@tanstack/react-query";
import { bannerget } from "../api/api";


export const useBanner = () => {
  return useQuery({
    queryKey: ['banner'],
    queryFn: () => bannerget.getBanner(),
    select: (data) => data.results || [],
  });
};
