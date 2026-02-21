import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://baitech.kg";
export const WSS_URL = 'baitech';

export const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" 
    ? localStorage.getItem("access_token") // ✅ Исправлено на access_token
    : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
  } else {
    console.warn("Токен не найден в localStorage!");
  }

  config.headers["ngrok-skip-browser-warning"] = "true";

  return config;
}, (error) => {
  return Promise.reject(error);
});

// Добавьте перехватчик ответов для обработки ошибок авторизации
$api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Токен истек или невалиден
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      
      if (typeof window !== "undefined") {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);