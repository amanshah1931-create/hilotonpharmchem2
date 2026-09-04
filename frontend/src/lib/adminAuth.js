import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const TOKEN_KEY = "hpc_admin_token";

export function getToken() {
  return sessionStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  sessionStorage.removeItem(TOKEN_KEY);
}

export function isAuthed() {
  return !!getToken();
}

export async function login(password) {
  const res = await axios.post(`${API}/admin/login`, { password });
  setToken(res.data.token);
  return res.data;
}

export function logout() {
  clearToken();
}

// Axios instance that automatically attaches the admin bearer token.
// Use this for any admin-protected call (blog create/update/delete, inquiry read/delete).
export const adminApi = axios.create({ baseURL: API });

adminApi.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

adminApi.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status === 401) {
      clearToken();
    }
    return Promise.reject(err);
  }
);
