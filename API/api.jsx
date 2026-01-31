import axios from "axios";

const BASE_URL = 'https://ayla-diandrous-unobscenely.ngrok-free.dev'; 
export const WSS_URL = 'baitech';

export const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken"); 

  if (token) {
    config.headers.Authorization = `Bearer ${token}`; 
    
    console.log("Запрос ушел с заголовком:", config.headers.Authorization);
  } else {
    console.warn("Токен не найден в localStorage!");
  }

  config.headers["ngrok-skip-browser-warning"] = "true";

  return config;
}, (error) => {
  return Promise.reject(error);
});