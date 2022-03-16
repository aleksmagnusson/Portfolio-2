/*
 * Hämtar "Container" från Chakra, Container ersätts av vår egna animation på hemsidan "AnimatedPage"
 * Animated page hämtas från "partials/AnimatedPage".
 * Denna sidan är för närvarande tom.
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { useRecoilValue } from "recoil";
import AnimatedPage from "../partials/AnimatedPage";

function About() {
  return (
    <Container>
      <Flex minHeight="50vh" alignItems="center">
        <Stack alignItems="flex-start">
          <Heading>About</Heading>
          <Text alignContent="center" width="40vh">
            Hej! I'm a photographer and currently a Frontend/App Developer at
            Changemaker Educations based in Stockholm, Sweden.
          </Text>
        </Stack>
      </Flex>
    </Container>
  );
}

export default About;
