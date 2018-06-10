import { toast } from 'react-toastify';

const TOKEN_KEY = "JWT";
const USER_LEVEL_KEY = "userLevel";

const getToken = () => localStorage.getItem(TOKEN_KEY);

export const restoreState = () => {
  let jwtToken = localStorage.getItem(TOKEN_KEY);
  let userLevel = localStorage.getItem(USER_LEVEL_KEY);
  return jwtToken && userLevel ? ({ jwtToken, userLevel, isAuthenticated: true }) : { isAuthenticated: false };
};

export const saveToken = ({ jwtToken, userLevel }) => {
  localStorage.setItem(TOKEN_KEY, jwtToken);
  localStorage.setItem(USER_LEVEL_KEY, userLevel);
};

export const cleanToken = () => {
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
  remove: (url = "",) => (
    fetch(
      `${base}/${url}`,
      {
        method: "DELETE",
        headers: {
          Authentication: `Bearer ${getToken()}`,
          "Content-Type": "application/json"
        }
      }
    ).then(processJsonResponse)
  )
});

export default apiFactory;