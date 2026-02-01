import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { $api } from "../../../API/api";

export const useOrders = (filters = {}) => {
  const queryClient = useQueryClient();

  // Удаляем пустые строки, чтобы не отправлять их в query-параметры
  const activeFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, v]) => v !== "" && v !== null)
  );

  const ordersQuery = useQuery({
    queryKey: ["orders", activeFilters],
    queryFn: async () => {
      const { data } = await $api.get("/ordering/", { params: activeFilters });
      return data;
    },
    placeholderData: (prev) => prev, // Сохраняем старые данные пока грузятся новые
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }) => $api.patch(`/ordering/${id}/`, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  return {
    orders: ordersQuery.data?.results || [],
    stats: ordersQuery.data?.dashboard_stats || {},
    totalCount: ordersQuery.data?.count || 0,
    isLoading: ordersQuery.isLoading,
    isFetching: ordersQuery.isFetching,
    updateStatus: updateStatusMutation.mutate,
  };
};