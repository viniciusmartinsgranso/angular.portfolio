import { NavbarInterface } from "./navbar.interface";
import { ProjectTypeEnum } from "../enums/project-type.enum";
import { Technology } from "../enums/techs.enum";

export interface ProjectInterface extends NavbarInterface {
  image: string;
  images: string[];
  description: string;
  type: ProjectTypeEnum;
  techs: Technology[];
}
