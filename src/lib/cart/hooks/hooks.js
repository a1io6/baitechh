import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { cart } from '../api/api'

// Получение корзины
export const useCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: cart.getCartItems,
  })
}

// Добавление товара
export const useCreateCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ product_id, quantity }) =>
      cart.createCartItem(product_id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })
}

// Обновление количества
export const useUpdateCartItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ product_id, quantity }) =>
      cart.updateCartItem(product_id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })
}

// Очистка корзины
export const useClearCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: cart.clearCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })
}
