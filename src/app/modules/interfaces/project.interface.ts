import { NavbarInterface } from "./navbar.interface";
import { ProjectTypeEnum } from "../enums/project-type.enum";
import { TechnologyEnum } from "../enums/techs.enum";

export interface ProjectInterface extends NavbarInterface {
  image: string;
  images: string[];
  description: string;
  type: ProjectTypeEnum;
  techs: TechnologyEnum[];
}
