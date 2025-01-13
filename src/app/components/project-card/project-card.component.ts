import { Component, Input } from '@angular/core';
import { ProjectInterface } from "../../modules/interfaces/project.interface";
import { ProjectTypeEnum } from "../../modules/enums/project-type.enum";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input({ required: true })
  public project: ProjectInterface = {
    name: '',
    description: '',
    type: ProjectTypeEnum.ALL,
    techs: [],
    link: '',
    image: '',
    images: [],
  };

}
