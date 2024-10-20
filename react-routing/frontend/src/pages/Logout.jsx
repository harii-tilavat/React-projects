import { redirect } from "react-router-dom";
import { removeToken } from "../util/auth";

export function logoutAction() {
  removeToken();
  return redirect("/auth");
}
