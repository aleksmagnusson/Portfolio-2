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
    <AnimatedPage>
      <Flex minHeight="50vh" alignItems="center">
        <Stack alignItems="flex-start">
          <Heading>Get in touch with me!</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            sunt blanditiis hic mollitia quisquam rerum porro a ullam quos,
            recusandae similique, quam minima esse, reprehenderit provident
            molestiae sapiente? Magni, a.
          </Text>
          <Button as="a" href="mailto:aleks.magnusson.com">
            aleks.magnusson@gmail.com
          </Button>
        </Stack>
      </Flex>
    </AnimatedPage>
  );
}

export default Contact;
