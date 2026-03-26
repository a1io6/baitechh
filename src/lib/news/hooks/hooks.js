import { useQuery } from "@tanstack/react-query";
import { bannerget } from "../api/api";


export const useBanner = () => {
  return useQuery({
    queryKey: ["news", "event-banners"],
    queryFn: () => bannerget.getBanner(),
    select: (data) => data.results || [],
  });
};
