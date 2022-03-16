import React from "react";
import ProductsBlock from "./../components/blocks/Products";
import { Container, Heading, Flex, Stack } from "@chakra-ui/react";
import { productsState } from "../components/Recoil/products/atom";
import { useRecoilValue } from "recoil";
import AnimatedPage from "../partials/AnimatedPage";

function Products() {
  const products = useRecoilValue(productsState);

  /*
   * Hämtar produkter från min atom som finns i stores. Namngett en ny atom samt implementerat den länk för produkter som behövs.
   * Här visas produkterna för min webbplats. Som syns annars under fliken products.jsx
   */

  return (
    <Container>
      <Flex minHeight="60vh" alignItems="center">
        <Stack alignItems="flex-start">
          <Heading display="flex" align-items="center">
            Our products
          </Heading>
          <ProductsBlock products={products} />
        </Stack>
      </Flex>
    </Container>
  );
}

export default Products;
