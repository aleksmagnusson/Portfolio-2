import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";
import ProjectsBlock from "./../components/blocks/Projects";
import { projectsState } from "./../stores/projects/atom";
import { useRecoilValue } from "recoil";
import AnimatedPage from "../partials/AnimatedPage";

// Använder sig av selectors på recoils dokumentation, när man ska manipulera en lista.
// Filtrera eller lägga till saker i sin lista.

function Home() {
  const projects = useRecoilValue(projectsState);

  // På "Hem" använder vi oss av Recoil, useRecoilValue hämtar data från projectsState. Visar alla värden som är definerade.

  return (
    <AnimatedPage>
      <Flex minHeight="60vh" alignItems="center">
        <Stack alignItems="flex-start">
          <Heading>Aleks Magnusson</Heading>
          <Image src="https://images.pexels.com/users/avatars/1256099/aleks-magnusson-681.jpeg?auto=compress&fit=crop&h=100&w=100"></Image>
          <Heading>Frontend App Developer Student</Heading>
          <Text>

            Hello, I'm Aleks Magnusson.
            A frontend app developer student at ChangeMaker Education.

            I am currently developing this website to be something bigger.
            This whole site is what I have learned during codealongs and self-studies.

            Be free to navigate and look on this website.
            "Happy Hacking!"
          </Text>
          <Button as={Link} to="/projects">
            Take a look on some of my projects!
          </Button>
        </Stack>
      </Flex>

      <ProjectsBlock projects={projects} />
    </AnimatedPage>
  );
}

export default Home;
