import react from "react";
import { Heading, Box, Text, Button, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
// Behöver en 'import' hook med "useCart"...

function Cart() {
  const { cart } = useCart();
  const { totalPrice, totalItems } = useRecoilValue(getCartTotal);

  return (
    <Container>
      <h2> Your Main Shoppingcart </h2>
      <Heading as="h2">Shoppingcart</Heading>
      <Button marginRight="25">Empty shoppingcart</Button>
      <Text> You have {amount.products.id} in your shoppingcart.</Text>

      {cart.map((item) => (
        <CartItem key={item.product.id} data={item} />
      ))}

      <Box> Your items: {totalItems} </Box>
      <Box> Total price: ${totalPrice} </Box>
      <Button marginRight="25"> Checkout </Button>
    </Container>
  );
}

export default Cart;
