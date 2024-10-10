import Auth from "./components/Auth.jsx";
import Counter from "./components/Counter";
import Header from "./components/Header.jsx";
import UserProfile from "./components/UserProfile.jsx";
import { useSelector } from "react-redux";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {(isAuth && <UserProfile />) || <Auth />}

      <Counter />
    </>
  );
}

export default App;
