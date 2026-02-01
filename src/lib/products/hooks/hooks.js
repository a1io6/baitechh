import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productApi } from '../api/useProducts';

export const useProducts = () => {
    const queryClient = useQueryClient();

    // Запрос на получение данных
    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: productApi.getAll,
    });

    // Мутация на удаление
    const deleteMutation = useMutation({
        mutationFn: (id) => productApi.delete(id),
        onSuccess: () => {
            // Инвалидация кэша, чтобы список обновился автоматически
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });

    // Мутация на обновление
    const updateMutation = useMutation({
        mutationFn: ({ id, payload }) => productApi.put(id, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
        onError: (error) => {
            console.error('Update product error:', error);
        },
    });

    const changeAvailabilityMutation = useMutation({
        mutationFn: ({ id, is_available }) => productApi.changeAvailability(id, is_available),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });

    const addProductMutation = useMutation({
        mutationFn: (newProduct) => productApi.create(newProduct),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });

    const addCategoryMutation = useMutation({
        mutationFn: (newCat) => productApi.createCategory(newCat), // Путь: /products/categories/
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        },
    });

    const addBrandMutation = useMutation({
        mutationFn: (newBrand) => productApi.createBrand(newBrand), // Путь: /products/brands/
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['brands'] });
        },
    });

    const categoriesQuery = useQuery({
        queryKey: ['categories'],
        queryFn: productApi.getCategories,
    });

    const brandsQuery = useQuery({
        queryKey: ['brands'],
        queryFn: productApi.getBrands,
    });

    return {
        products: productsQuery.data?.results || productsQuery.data || [],
        isLoading: productsQuery.isLoading,
        isError: productsQuery.isError,
        deleteProduct: deleteMutation.mutate,
        updateProduct: updateMutation.mutate,
        changeAvailability: changeAvailabilityMutation.mutate,
        addProduct: addProductMutation.mutateAsync,
        categories: categoriesQuery.data?.results || (Array.isArray(categoriesQuery.data) ? categoriesQuery.data : []),
        brands: brandsQuery.data?.results || (Array.isArray(brandsQuery.data) ? brandsQuery.data : []),
        isInitialLoading: categoriesQuery.isLoading || brandsQuery.isLoading,
        addCategory: addCategoryMutation.mutateAsync,
        addBrand: addBrandMutation.mutateAsync,
    };
};