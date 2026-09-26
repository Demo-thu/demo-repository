import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("edushare_access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;
    const isAuthCall = original?.url?.includes("/auth/login") || original?.url?.includes("/auth/refresh");
    if (error.response?.status !== 401 || !original || original._retry || isAuthCall) {
      return Promise.reject(error);
    }
    const refreshToken = localStorage.getItem("edushare_refresh");
    if (!refreshToken) {
      return Promise.reject(error);
    }
    original._retry = true;
    try {
      const { data } = await axios.post(`${api.defaults.baseURL}/auth/refresh`, { refreshToken });
      localStorage.setItem("edushare_access", data.accessToken);
      localStorage.setItem("edushare_refresh", data.refreshToken);
      original.headers.Authorization = `Bearer ${data.accessToken}`;
      return api(original);
    } catch (refreshError) {
      localStorage.removeItem("edushare_access");
      localStorage.removeItem("edushare_refresh");
      localStorage.removeItem("edushare_user");
      if (window.location.pathname !== "/login") {
        window.location.assign("/login");
      }
      return Promise.reject(refreshError);
    }
  },
);

export function saveSession(payload) {
  localStorage.setItem("edushare_access", payload.accessToken);
  localStorage.setItem("edushare_refresh", payload.refreshToken);
  localStorage.setItem("edushare_user", JSON.stringify(payload.user));
}

export function currentUser() {
  const raw = localStorage.getItem("edushare_user");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem("edushare_access");
  localStorage.removeItem("edushare_refresh");
  localStorage.removeItem("edushare_user");
}

export function isLoggedIn() {
  return Boolean(localStorage.getItem("edushare_access"));
}

export function apiError(error, fallback) {
  const message = error?.response?.data?.message;
  if (Array.isArray(message)) return message.join(", ");
  if (typeof message === "string" && message.trim()) return message;
  return fallback;
}

export default api;
