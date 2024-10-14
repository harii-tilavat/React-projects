import { Link } from "react-router-dom";
const PRODUCTS = [
  { id: "p1", title: "Product1" },
  { id: "p2", title: "Product2" },
  { id: "p3", title: "Product3" },
];
export default function ProductsPage() {
  return (
    <div>
      <h1>Products page works!</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
