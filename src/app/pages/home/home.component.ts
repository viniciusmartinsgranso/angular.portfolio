import {
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
  Inject,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { ProjectInterface } from "../../modules/interfaces/project.interface";
import { projects } from "../../modules/mocks/projects";
import { technologiesMock } from "../../modules/mocks/technologies.mock";
import { ModalService } from "../../services/modal.service";
import { ProjectTypeEnum } from "../../modules/enums/project-type.enum";
import { SwiperOptions } from "swiper/types";
import { SwiperContainer } from "swiper/swiper-element";
import { DeviceDetectorService } from "../../services/device-detector.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    @Inject(DOCUMENT)
    private readonly doc: Document,
  ) {
    effect(() => {
      const swiperElement = this.swiper.nativeElement;

      Object.assign(swiperElement, this.slideConfig);
      swiperElement.initialize();
    });
  }

  //#region Injectable

  private readonly modalService: ModalService = inject(ModalService);

  private readonly deviceDetectorService: DeviceDetectorService = inject(DeviceDetectorService);

  //#endregion

  //#regio Private Properties

  @ViewChild('swiper', { static: false })
  public swiper!: ElementRef<SwiperContainer>;

  //#endregion

  //#region Public Properties

  public technologies: string[] = technologiesMock;

  public projects: ProjectInterface[] = projects;

  public projectsFiltered: ProjectInterface[] = projects;

  public listProjectType: ProjectTypeEnum[] = Object.values(ProjectTypeEnum);

  public selectedProjectFilter: ProjectTypeEnum = ProjectTypeEnum.ALL;

  public slideConfig: SwiperOptions = {
    slidesPerView: this.deviceDetectorService.isMobile() ? 1 : 3,
    autoplay: true,
    loop: true,
  };

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

  public changeSlide(prevOrNext: number): void {
    if (prevOrNext === -1) {
      this.swiper.nativeElement.swiper.slidePrev();
    } else {
      this.swiper.nativeElement.swiper.slideNext();
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
