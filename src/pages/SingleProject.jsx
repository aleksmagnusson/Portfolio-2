import React from "react";
import { useParams } from "react-router-dom";
import { projectsState } from "../stores/projects/atom";
import { useRecoilValue } from "recoil";
import AnimatedPage from "../partials/AnimatedPage";

// Kolla in om params igen.

/*
 * SingleProjects använder sig av den konstanta variabeln useParams
 * I React Router använder man sig av olika "Hooks" speciellt "useParams", "useLocation" eller "useHistory".
 * useRouter Hooks exponerar just den data eller metod vi behöver.
 * Läs mer på (https://usehooks.com/useRouter/)
 */

function SingleProjects() {
  const params = useParams();
  const projects = useRecoilValue(projectsState);

  const project = projects.find((project) => project.id === params.projectId);

  return <AnimatedPage>{project.title}</AnimatedPage>;
}

export default SingleProjects;
