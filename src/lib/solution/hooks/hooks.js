'use client'; 
import { useQuery } from "@tanstack/react-query";
import { solutionService } from "../api/api";

export const useSolutionBanners = () => {
  return useQuery({
    queryKey: ['banners', 'solution'],
    queryFn: () => solutionService.getBanners(),
  });
};
export const useSolutionBannerById = (id) => {
  return useQuery({
    queryKey: ['banners', 'solution', id],
    queryFn: () => solutionService.getBannersbyid(id).then(d => { console.log(d); return d; }),
    enabled: !!id,
  });
};