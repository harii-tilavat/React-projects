import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import productList from "../../util/productsData";
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList.map((item) => (
          <ProductItem {...item} key={item.id}/>
        ))}
      </ul>
    </section>
  );
};

export default Products;
