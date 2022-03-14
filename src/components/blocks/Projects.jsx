/* Importerar biblotek från React.
 * Importerar {Link} från React-router-dom, som gör det möjligt att länka mellan sidor snabbare.
 * "Heading, Text, Button, Stack, Image, Box & SimpleGrid" hämtas från CSS paketet Chakra.
 * Skriver in vilka klasser/komponenter som hämtas och lägger in dem i appen.
 */
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

/* 
 * Funktion som opererar på projects.jsx
 * Sätter in värdena för de olika komponenterna från Chakra.
 * Använder sig av project.map() som hanterar nummer.
 * En key behövs för att identifiera ett visst föremål/värde.
 * Använd key för att sätta ett unikt värde. Varje "key:" har sitt eget värde ihop med funktionen.
 */

function Projects({ projects }) {
  return (
    <Box minHeight="60vh">
      <Heading>Projekt jag är stolt över</Heading>
      <Stack spacing="32px">
        {projects.map((project) => (
          <SimpleGrid key={project.id} columns={2}>
            <Image src={project.image} />
            <Box>
              <Heading>{project.title}</Heading>
              <Text>{project.description}</Text>
              <Button as={Link} to={`/projects/${project.id}`}>
                Läs mer
              </Button>
            </Box>
          </SimpleGrid>
        ))}
      </Stack>
    </Box>
  );
}

export default Projects;
