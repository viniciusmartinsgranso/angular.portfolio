import { Component, Input } from '@angular/core';
import { ProjectInterface } from "../../modules/interfaces/project.interface";
import { ProjectTypeEnum } from "../../modules/enums/project-type.enum";

@Component({
  selector: 'app-project-card',
  template: `
    <div class="project-card">
      <img [src]="project.image" alt="Imagem do projeto">

      <h1>{{ project.name }}</h1>

      <div class="project-card--techs">
        <ng-container *ngFor="let tech of project.techs">
          <label>{{ tech }}</label>
        </ng-container>
      </div>
    </div>`,
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
