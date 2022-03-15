import React from "react";
import ProductsBlock from "./../components/blocks/Products";
import { Container, Heading } from "@chakra-ui/react";
import { productsState } from "../stores/products/atomProducts";
import { useRecoilValue } from "recoil";

function Products() {
  const products = useRecoilValue(productsState);

  /*
   * Hämtar produkter från min atom som finns i stores. Namngett en ny atom samt implementerat den länk för produkter som behövs.
   * Här visas produkterna för min webbplats. Som syns annars under fliken products.jsx
   */

  return (
    <div>
      <Heading>Sample Products X</Heading>
      <ProductsBlock products={products} />
    </div>
  );
}

export default Products;
