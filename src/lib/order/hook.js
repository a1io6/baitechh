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
    mutationFn: async ({ id, status, statusId }) => {
      const payloads = [{ status }, { name: status }];

      if (statusId !== undefined && statusId !== null) {
        payloads.push({ status: statusId }, { status_id: statusId }, { id: statusId });
      }

      let lastError;

      for (const payload of payloads) {
        try {
          const { data } = await $api.patch(`ordering/orders/${id}/change_status/`, payload);
          return data;
        } catch (error) {
          lastError = error;
        }
      }

      throw lastError;
    },
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
    nextPageUrl: ordersQuery.data?.next || null,
    previousPageUrl: ordersQuery.data?.previous || null,
    isLoading: ordersQuery.isLoading,
    isFetching: ordersQuery.isFetching,
    updateStatus: updateStatusMutation.mutate,
    isUpdating: updateStatusMutation.isPending,
    statuses: getStatuses.data,
  };
};
