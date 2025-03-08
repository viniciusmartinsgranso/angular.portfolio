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
import { ExperienceInterface } from "../../modules/interfaces/experience.interface";
import { experiencesMock } from "../../modules/mocks/experiences-mock";
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animTrigger', [
      state('left', style({ transform: 'translateX(0)', opacity: 1 })),
      state('right', style({ transform: 'translateX(0)', opacity: 1 })),
      state('fade', style({ opacity: 1 })),
      state('top', style({ transform: 'translateY(0)', opacity: 1 })),
      state('bottom', style({ transform: 'translateY(0)', opacity: 1 })),

      transition('* => left', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('{{duration}} ease-out')
      ], { params: { duration: '1s' } }),

      transition('* => right', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('{{duration}} ease-out')
      ], { params: { duration: '1s' } }),

      transition('* => fade', [
        style({ opacity: 0 }),
        animate('{{duration}} ease-in')
      ], { params: { duration: '1s' } }),

      transition('* => top', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('{{duration}} ease-out')
      ], { params: { duration: '1s' } }),

      transition('* => bottom', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('{{duration}} ease-out')
      ], { params: { duration: '1s' } })
    ])
  ]
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

  public experiences: ExperienceInterface[] = experiencesMock;

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

  public changeSlide(isPrev: boolean): void {
    isPrev ? this.swiper.nativeElement.swiper.slidePrev() : this.swiper.nativeElement.swiper.slideNext()
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
