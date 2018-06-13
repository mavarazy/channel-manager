import { toast } from 'react-toastify';

const TOKEN_KEY = "token";

const getToken = () => localStorage.getItem(TOKEN_KEY);

export const restoreState = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ? ({ token, isAuthenticated: true }) : { isAuthenticated: false };
};

export const saveToken = ({ token }) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const clearToken = () => {
  localStorage.clear();
};

const processJsonResponse = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    let errorJson = res.json().catch(() => ({ error: { message: "Server error, contact support" } }));
    errorJson.then(({ error: { message = "Unknown server error, contact support " } }) => toast.error(message));
    return errorJson;
  }
};

export const apiFactory = (base) => ({
  get: (url = "") => (
    fetch(
      `${base}/${url}`,
      {
        method: "GET",
        headers: {
          Authentication: `Bearer ${getToken()}`,
          "Content-Type": "application/json"
        }
      }
    ).then(processJsonResponse)
  ),
  post: (url = "", body = {}) => (
    fetch(
      `${base}/${url}`,
      {
        method: "POST",
        headers: {
          Authentication: `Bearer ${getToken()}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    ).then(processJsonResponse)
  ),
  put: (url = "", body = {}) => (
    fetch(
      `${base}/${url}`,
      {
        method: "PUT",
        headers: {
          Authentication: `Bearer ${getToken()}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    ).then(processJsonResponse)
  ),
  patch: (url = "", body = {}) => (
    fetch(
      `${base}/${url}`,
      {
        method: "PATCH",
        headers: {
          Authentication: `Bearer ${getToken()}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    ).then(processJsonResponse)
  ),
  remove: (url = "", body = {}) => (
    fetch(
      `${base}/${url}`,
      {
        method: "DELETE",
        headers: {
          Authentication: `Bearer ${getToken()}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    ).then(processJsonResponse)
  )
});

export default apiFactory;