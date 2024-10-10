import classes from "./Auth.module.css";
// import {} from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
const Auth = () => {
  const dispacth = useDispatch();
  function handleLogin(event) {
    event.preventDefault();
    dispacth(authActions.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
