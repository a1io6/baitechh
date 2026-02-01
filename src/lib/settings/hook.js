import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { $api } from "../../../API/api";

export const useSiteSettings = () => {
  const queryClient = useQueryClient();

  // Получение данных
  const settingsQuery = useQuery({
    queryKey: ["site-settings"],
    queryFn: async () => {
      const { data } = await $api.get("/site-settings/"); // Указываем ID 1
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
      alert("Настройки сохранены!");
    },
  });

  return {
    settings: settingsQuery.data,
    isLoading: settingsQuery.isLoading,
    updateSettings: updateSettingsMutation.mutate,
    isUpdating: updateSettingsMutation.isPending,
  };
};