import { ProjectInterface } from "../interfaces/project.interface";
import { personalProjects } from "./personal-projects.mock";
import { professionalProjectsMock } from "./professional-projects.mock";

export const projects: ProjectInterface[] = [
  ...professionalProjectsMock,
];
