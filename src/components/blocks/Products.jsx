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
  console.log({ products });
  return (
    <Box minHeight="65vh">
      <br />
      <Stack spacing="40px">
        {products.map((product) => (
          <SimpleGrid key={product.id} columns={2}>
            <Image
              width="55%"
              marginLeft="auto"
              marginRight="auto"
              src={product.image}
            />
            <Box>
              <Heading fontSize="larger">{product.title}</Heading>
              <Text fontStyle="italic">{product.description}</Text>
              <Text fontWeight="bold">{product.price} $</Text>
              <Text fontWeight="medium">{product.category}</Text>
              <Text fontWeight="bold">
                {" "}
                Rating: {product.rating.rate} of {product.rating.count} ratings.
              </Text>
              <br />
              <Button as={Link} to={`/products/${product.id}`}>
                See More
              </Button>
              <Button as={Link} to={`/shop/${product.id}`}>
                Add product
              </Button>
            </Box>
          </SimpleGrid>
        ))}
      </Stack>
    </Box>
  );
}

export default Products;
