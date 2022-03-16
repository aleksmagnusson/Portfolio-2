// Importerar komponenter och biblotek till "Contact".

import React from "react";
import {
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import AnimatedPage from "../partials/AnimatedPage";

/*
 * Kontaktsidan får sitt egna fält med exempeltext och andra attribut.
 * Länk till @gmail länkas också.
 */

function Contact() {
  return (
    <Container>
      <Flex minHeight="50vh" alignItems="center">
        <Stack alignItems="flex-start">
          <Heading>Get in touch with me!</Heading>
          <Text alignContent="center" width="40vh">
            Whether you have a great idea, story, concept or money to spend (on
            a great idea) get in touch with me! Together we create new
            possibilities! I am available for local projects as well as
            potential employment opportunities. Click on the @e-mail buttom to
            send me a message.
          </Text>
          <Button as="a" href="mailto:aleks.magnusson.com">
            Send me a email
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}

export default Contact;
