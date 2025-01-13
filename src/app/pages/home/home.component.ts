import { Component, HostListener, inject, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { ProjectInterface } from "../../modules/interfaces/project.interface";
import { projects } from "../../modules/mocks/projects";
import { technologiesMock } from "../../modules/mocks/technologies.mock";
import { ModalService } from "../../services/modal.service";
import { ProjectTypeEnum, translatedProjectTypes } from "../../modules/enums/project-type.enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    @Inject(DOCUMENT)
    private readonly doc: Document,
  ) {}

  //#region Injectable

  private readonly modalService: ModalService = inject(ModalService);

  //#endregion

  //#region Public Properties

  public technologies: string[] = technologiesMock;

  public projects: ProjectInterface[] = projects;

  public projectsFiltered: ProjectInterface[] = projects;

  public listProjectType: ProjectTypeEnum[] = Object.values(ProjectTypeEnum);

  public translatedProjectTypes: Record<ProjectTypeEnum, string> = translatedProjectTypes;

  public selectedProjectFilter: ProjectTypeEnum = ProjectTypeEnum.ALL;

  //#endregion

  //#region Public Methods

  public async redirectTo(route: string): Promise<void> {
    this.doc.getElementById(route)?.scrollIntoView();
  }

  public openProject(project: ProjectInterface): void {
    console.log('');
  }

  public topFunction(): void {
    this.doc.body.scrollTop = 0;
    this.doc.documentElement.scrollTop = 0;
  }

  public filterProjectByType(type: ProjectTypeEnum): void {
    this.selectedProjectFilter = type;

    if (type === ProjectTypeEnum.ALL) {
      this.projectsFiltered = this.projects;
    } else {
      this.projectsFiltered = this.projects.filter(project => project.type === type);
    }
  }

  //#endregion

  //#region Private Methods

  @HostListener('window:scroll', ['$event'])
  private onScroll(): void {
    this.toggleOnTop();
  }

  private toggleOnTop(): void {
    const redirectToTop = this.doc.getElementById('btnRedirectTop');

    if (!redirectToTop)
      return;

    redirectToTop.style.display = 'none';

    if (this.doc.body.scrollTop > 100 || this.doc.documentElement.scrollTop > 100)
      redirectToTop.style.display = 'block';
  }

  //#endregion

}
