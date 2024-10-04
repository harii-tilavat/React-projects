import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function LoginState() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const isEmailInvalid = didEdit.email && !isEmail(enteredValue.email) && isNotEmpty(enteredValue.email);
  const isPasswordInvalid = didEdit.password && !hasMinLength(enteredValue.password, 6);
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
    console.log("Entered value : ", enteredValue);
  }
  function handleInputChange(identifier, newValue) {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [identifier]: newValue,
    }));
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  }
  function handleInputBlur(identifier) {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email" error={isEmailInvalid && "Please enter a valid email!"} value={enteredValue.email} onBlur={() => handleInputBlur("email")} onChange={(e) => handleInputChange("email", e.target.value)} />
        <Input label="Password" id="password" type="password" name="password" error={isPasswordInvalid && "Please enter password minimun 5 characters!"} value={enteredValue.password} onBlur={() => handleInputBlur("password")} onChange={(e) => handleInputChange("password", e.target.value)} />
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
