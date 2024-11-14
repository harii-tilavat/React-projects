import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  toggleFavorite: (id) => {},
});

const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  function toggleFavorite(id = "p1") {
    setProductList((prevProducts) => {
      const idx = prevProducts.findIndex((i) => i.id === id);
      const newStatus = !prevProducts[idx].isFavorite;
      const updatedProducts = [...prevProducts];
      updatedProducts[idx] = {
        ...prevProducts[idx],
        isFavorite: newStatus,
      };
      return updatedProducts;
    });
  }
  return <ProductsContext.Provider value={{ products: productList, toggleFavorite }}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
