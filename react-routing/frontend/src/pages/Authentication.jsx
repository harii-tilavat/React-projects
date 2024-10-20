import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { setAuthToken } from "../util/auth";

const AuthenticationPage = () => {
  return <AuthForm />;
};

export default AuthenticationPage;
export const authAction = async ({ request, params }) => {
  const fd = await request.formData();
  const authData = {
    email: fd.get("email"),
    password: fd.get("password"),
  };
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    return json({ message: "Mode is not valid!" }, { status: 422 });
  }
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    return json({ message: "Could not authenticate the user." }, { status: 500 });
  }
  const resData = await response.json();
  setAuthToken(resData.token);
  return redirect("/");
};
