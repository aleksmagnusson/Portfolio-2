import React from "react";
import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Hämtar in animation {motion} från bibloteket "framer-motion".
// Nedan sätter vi in värdena för animationen. Synlighet och längd på animationen, te.x: opacity:0 / duration:2.

const pageMotion = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 50, transition: { duration: 2 } },
  exit: { opacity: 0, x: 0, transition: { duration: 2 } },
};

/*
 * "Child" eller "Children" ger oss mojligheten att använda flera komponenter som data i andra komponenter.
 * Precis som vi använder det i våra "props". Saken med "children" är att React stöder genom "ReactElement API" så det översätts till React Children.
 */

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
// Ger nyckelfunktioner till våran motion, animation.
export default AnimatedPage;
