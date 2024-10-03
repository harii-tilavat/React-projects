import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
    console.log("Entered value : ", enteredValue);
  }
  function handleInputChange(identifier, newValue) {
    setEnteredValue((prevValue) => {
      return {
        ...prevValue,
        [identifier]: newValue,
      };
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={enteredValue.email} onChange={(e) => handleInputChange("email", e.target.value)} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={enteredValue.password} onChange={(e) => handleInputChange("password", e.target.value)} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
