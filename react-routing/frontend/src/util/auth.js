import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const expiration = localStorage.getItem("expiration");
  const expirationDate = new Date(expiration);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function setAuthToken(token) {
  localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
}
export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) return "EXPIRED";

  return token;
}
export function removeToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
}
export function tokenLoader() {
  return getAuthToken();
}
export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
}
