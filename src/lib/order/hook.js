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
      const { data } = await $api.get("/ordering/orders/", { params: activeFilters });
      return data;
    },
    placeholderData: (prev) => prev,
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }) => $api.put(`ordering/statuses/${id}`, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const getStatuses = useQuery({
    queryKey: ["statuses"],
    queryFn: async () => {
      const { data } = await $api.get("ordering/orders/statistics/");
      return data;
    },
    placeholderData: (prev) => prev,
  });

  return {
    orders: ordersQuery.data?.results || [],
    stats: ordersQuery.data?.dashboard_stats || {},
    totalCount: ordersQuery.data?.count || 0,
    isLoading: ordersQuery.isLoading,
    isFetching: ordersQuery.isFetching,
    updateStatus: updateStatusMutation.mutate,
    isUpdating: updateStatusMutation.isPending,
    statuses: getStatuses.data,
  };
};