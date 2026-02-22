import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://baitech.kg/";
export const WSS_URL = 'baitech';

export const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  const userToken = typeof window !== "undefined" 
    ? localStorage.getItem("access_token")
    : null;
  const adminToken = typeof window !== "undefined" 
    ? localStorage.getItem("adminToken")
    : null;

  // Если есть админ, используем его токен, иначе — пользователя
  const token = adminToken || userToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("Токен не найден в localStorage!");
  }

  config.headers["ngrok-skip-browser-warning"] = "true";
  return config;
}, (error) => Promise.reject(error));



// Добавьте перехватчик ответов для обработки ошибок авторизации
$api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);