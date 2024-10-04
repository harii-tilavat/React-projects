import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function LoginState() {
  const email = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const password = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (email.hasError || password.hasError) {
      return;
    }

    console.log("Email : ", email.value);
    console.log("Password : ", password.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email" error={email.hasError && "Please enter a valid email!"} value={email.value} onBlur={() => email.handleInputBlur()} onChange={email.handleInputChange} />
        <Input label="Password" id="password" type="password" name="password" error={password.hasError && "Please enter password minimun 5 characters!"} value={password.value} onBlur={password.handleInputBlur} onChange={password.handleInputChange} />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
