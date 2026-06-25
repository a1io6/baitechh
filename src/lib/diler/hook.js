import { useMutation } from '@tanstack/react-query';
import { diller } from './api';

export const useCreateDiller = () => {
  return useMutation({
    mutationFn: (formData) => diller.createDiller(formData),
  });
};