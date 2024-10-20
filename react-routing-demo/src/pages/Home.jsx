import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home page works!</h1>
      Go to <Link to="/products">Products list</Link>
    </div>
  );
}
