import React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

function Products({ products }) {
  return (
    <Box minHeight="65vh">
      <Heading>Product Page</Heading>
      <Stack spacing="18px">
        {products.map((product) => (
          <SimpleGrid key={product.id} columns={5}>
            <Image src={product.image} />
            <Box>
              <Heading>{product.title}</Heading>
              <Text>{product.description}</Text>
              <Text>{product.price}</Text>
              <Text>{product.category}</Text>
              <Text>
                {product.rating} | {product.count}
              </Text>
              <Button as={Link} to={`/products/${product.id}`}>
                See More
              </Button>
            </Box>
          </SimpleGrid>
        ))}
      </Stack>
    </Box>
  );
}

export default Products;
