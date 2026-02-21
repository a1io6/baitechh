import { useQuery } from "@tanstack/react-query";
import { certificatesget } from "../api/api";

export const useCertificat = () => {
  return useQuery({
    queryKey: ["certificat"],
    queryFn: certificatesget.getCertificates,
    select: (data) => data?.results ?? [],
  });
};
