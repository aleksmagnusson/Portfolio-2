/*
 * Hämtar "Container" från Chakra, Container ersätts av vår egna animation på hemsidan "AnimatedPage"
 * Animated page hämtas från "partials/AnimatedPage".
 * Denna sidan är för närvarande tom.
 */

import { Container } from "@chakra-ui/react";
import React from "react";
import AnimatedPage from "../partials/AnimatedPage";

function About() {
  return <AnimatedPage></AnimatedPage>;
}

export default About;
