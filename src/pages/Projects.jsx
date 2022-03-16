import React from "react";
import ProjectsBlock from "./../components/blocks/Projects";
import { Container, Heading } from "@chakra-ui/react";
import { projectsState } from "./../stores/projects/atom";
import { useRecoilValue } from "recoil";
import AnimatedPage from "../partials/AnimatedPage";

function Projects() {
  const projects = useRecoilValue(projectsState);

  /*
   * ProjectsBlock visar data som hämtas ut från key men också den lista med objekt som visas.
   * X antal värden visas och syns här i projects.jsx
   */

  return (
    <Container>
      <Heading>My Projects</Heading>
      <ProjectsBlock projects={projects} />
    </Container>
  );
}

export default Projects;
