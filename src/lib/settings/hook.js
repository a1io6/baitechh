import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { $api } from "../../../API/api";
import toast from "react-hot-toast";

export const useSiteSettings = () => {
  const queryClient = useQueryClient();

  // Получение данных
  const settingsQuery = useQuery({
    queryKey: ["site-settings"],
    queryFn: async () => {
      const { data } = await $api.get("/site-settings/"); 
      return data;
    },
  });

  // Обновление данных
  const updateSettingsMutation = useMutation({
    mutationFn: async (payload) => {
      const { data } = await $api.patch("/site-settings/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["site-settings"] });
      toast.success("Настройки сохранены!");
    },
  });

  return {
    settings: settingsQuery.data,
    isLoading: settingsQuery.isLoading,
    updateSettings: updateSettingsMutation.mutate,
    isUpdating: updateSettingsMutation.isPending,
  };
};