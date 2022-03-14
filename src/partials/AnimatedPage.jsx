import React from "react";
import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const pageMotion = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 50, transition: { duration: 2 } },
  exit: { opacity: 0, x: 0, transition: { duration: 2 } },
};

// Sök up children.

function AnimatedPage({ children }) {
  return (
    <Container
      as={motion.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}
      maxWidth="container.lg"
    >
      {children}
    </Container>
  );
}

export default AnimatedPage;
