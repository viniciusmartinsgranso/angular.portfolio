import { Component, Input } from '@angular/core';
import { ProjectInterface } from "../../modules/interfaces/project.interface";
import { ProjectTypeEnum } from "../../modules/enums/project-type.enum";

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent {

  @Input()
  public project: ProjectInterface = {
    name: '',
    description: '',
    type: ProjectTypeEnum.ALL,
    techs: [],
    link: '',
    image: '',
    images: [],
  }

}
