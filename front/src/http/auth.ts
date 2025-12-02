import axios from "axios";
import { AuthRespons } from "../models/response/AuthResponse";

export const AUTH_URL = "http://localhost:5000/auth";

const $api = axios.create({
  withCredentials: true,
  baseURL: AUTH_URL,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthRespons>(`${AUTH_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e: any) {
        console.log("Не авторизован");
      }
    }
    throw error;
  }
);

export default $api;
