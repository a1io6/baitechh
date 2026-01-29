// hooks/mutations/useAuth.js
'use client';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { authService } from "../api/api";
import toast from "react-hot-toast";

// Регистрация
export const useRegister = () => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: (formData) => authService.register(formData),
    onSuccess: () => {
      toast.success('Регистрация успешна! Проверьте email для подтверждения.');
    },
    onError: (error) => {
      const message = error.response?.data?.message || 
                     error.response?.data?.detail || 
                     'Ошибка регистрации';
      toast.error(message);
    }
  });
};

export const useVerifyRegistration = () => {
  const router = useRouter();
  
  return useMutation({
    mutationKey: ['verify-registration'],
    mutationFn: ({ email, otp }) => authService.verifyRegistration(email, otp),
    onSuccess: () => {
      toast.success('Email подтвержден! Теперь вы можете войти.');
      router.push('/');
    },
    onError: (error) => {
      const message = error.response?.data?.message || 
                     error.response?.data?.detail || 
                     'Неверный код';
      toast.error(message);
    }
  });
};

// Повторная отправка кода активации
export const useResendActivationCode = () => {
  return useMutation({
    mutationKey: ['resend-activation-code'],
    mutationFn: ({email}) => authService.resendActivationCode(email),
    onSuccess: () => {
      toast.success('Код отправлен повторно на ваш email');
    },
    onError: (error) => {
      const message = error.response?.data?.message || 
                     error.response?.data?.detail || 
                     'Ошибка отправки кода';
      toast.error(message);
    }
  });
};

// Логин
export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (credentials) => authService.login(credentials),
    onSuccess: (data) => {
      // Обновляем кеш пользователя
      if (data.user) {
        queryClient.setQueryData(['auth', 'user'], data.user);
      }
      localStorage.setItem('accessToken', data.access); // сохраняем токен
      toast.success('Вход выполнен успешно!');
      router.push('/');
    },
    onError: (error) => {
      const message = error.response?.data?.message || 
                     error.response?.data?.detail || 
                     'Неверный email или пароль';
      toast.error(message);
    }
  });
};

// Логаут
export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: authService.logout,
    onSuccess: () => {
      // Очищаем кеш
      queryClient.clear();
      
      toast.success('Вы вышли из системы');
      router.push('/login');
    },
    onError: (error) => {
      // Даже при ошибке logout делаем локальный выход
      Cookies.remove('access');
      Cookies.remove('refresh');
      queryClient.clear();
      router.push('/login');
    }
  });
};

// Запрос на сброс пароля
export const usePasswordResetRequest = () => {
  return useMutation({
    mutationKey: ['password-reset-request'],
    mutationFn: (email) => authService.passwordResetRequest(email), // ✅ правильно
    onSuccess: () => {
      toast.success('Код для сброса пароля отправлен на ваш email');
    },
    onError: (error) => {
      const message = error.response?.data?.message || 
                     error.response?.data?.detail || 
                     'Ошибка отправки';
      toast.error(message);
    }
  });
};

// Подтверждение кода сброса пароля
export const usePasswordResetVerify = () => {
  return useMutation({
    mutationKey: ['password-reset-verify'],
    mutationFn: ({ email, otp }) => authService.passwordResetVerify(email, otp),
    onSuccess: () => {
      toast.success('Код подтвержден');
    },
    onError: (error) => {
      const message = error.response?.data?.message || 
                     error.response?.data?.detail || 
                     'Неверный код';
      toast.error(message);
    }
  });
};

// Завершение сброса пароля
export const usePasswordResetComplete = () => {
  const router = useRouter();
  
  return useMutation({
    mutationKey: ['password-reset-complete'],
    mutationFn: ({ email, otp, new_password }) => 
      authService.passwordResetComplete(email, otp, new_password),
    onSuccess: () => {
      toast.success('Пароль успешно изменен!');
      router.push('/login');
    },
    onError: (error) => {
      const message = error.response?.data?.message || 
                     error.response?.data?.detail || 
                     'Ошибка сброса пароля';
      toast.error(message);
    }
  });
};