import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { users } from "../api/api";
import toast from "react-hot-toast";

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: users.getUsers,
    select: (data) => Array.isArray(data) ? data : data.results || [],
    staleTime: 30000,
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    // mutationFn должен принимать id и пробрасывать его в API
    mutationFn: (id) => users.deleteUser(id), 
    
    onSuccess: () => {
      // Обновляем список пользователей после удаления
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('Пользователь удален!');
    },
    onError: (error) => {
      console.error('Ошибка при удалении:', error);
      // Проверка на разные форматы ошибок от сервера
      const message = error.response?.data?.detail || 
                      error.response?.data?.message || 
                      'Ошибка удаления пользователя';
      toast.error(message);
    }
  });
};