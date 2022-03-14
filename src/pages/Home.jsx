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

  return (
    <AnimatedPage>
      <Flex minHeight="60vh" alignItems="center">
        <Stack alignItems="flex-start">
          <Heading>Aleks Magnusson</Heading>
          <Image src="https://images.pexels.com/users/avatars/1256099/aleks-magnusson-681.jpeg?auto=compress&fit=crop&h=100&w=100"></Image>
          <Heading>Frontend Student</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            sunt blanditiis hic mollitia quisquam rerum porro a ullam quos,
            recusandae similique, quam minima esse, reprehenderit provident
            molestiae sapiente? Magni, a.
          </Text>
          <Button as={Link} to="/projects">
            Kolla in mina projekt
          </Button>
        </Stack>
      </Flex>

      <ProjectsBlock projects={projects} />
    </AnimatedPage>
  );
}

export default Home;
