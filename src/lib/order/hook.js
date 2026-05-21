import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { $api } from "../../../API/api";

export const useOrders = (filters = {}) => {
  const queryClient = useQueryClient();

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
  mutationFn: async ({ id, itemId, status, statusId }) => {
    const normalizedStatus = status ?? statusId;

    if (id == null || normalizedStatus == null) {
      throw new Error("Order id and status are required to update status.");
    }

    const payload = itemId != null
      ? { item_id: itemId, status: normalizedStatus }
      : { status: normalizedStatus };

    const { data } = await $api.patch(`ordering/orders/${id}/change_status/`, payload);
    return data;
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
    updateStatusAsync: updateStatusMutation.mutateAsync,
    isUpdating: updateStatusMutation.isPending,
    statuses: getStatuses.data,
  };
};