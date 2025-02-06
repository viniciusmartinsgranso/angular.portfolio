import { Component, inject, OnInit } from '@angular/core';
import { NavbarInterface } from "../../modules/interfaces/navbar.interface";
import { ModalService } from "../../services/modal.service";
import { TranslateService } from "@ngx-translate/core";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  //#region Injectable Properties

  private readonly modalService: ModalService = inject(ModalService);

  private readonly translateService: TranslateService = inject(TranslateService);

  //#endregion

  //#region Public Properties

  public navbarList: NavbarInterface[] = [
    {
      link: '/home#about',
      name: 'ABOUT-ME'
    },
    {
      link: '/home#experiences',
      name: 'EXPERIENCES'
    },
    {
      link: '/home#projects',
      name: 'PROJECTS'
    },
  ];

  public isNavbarOpen: boolean = false;

  public selectedLanguage: string = '';

  //#endregion

  //#Region Public Methods

  public ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  }

  public toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  public closeNavbar(): void {
    this.isNavbarOpen = false;
  }

  public openModal(): void {
    this.modalService.create({
      component: AboutMeComponent, inputs: {
        message: ''
      }
    });
  }

  public downloadCurriculum(): void {
    const link = document.createElement('a');
    let resume: string = '';

    if (this.selectedLanguage === 'pt')
      resume = 'assets/docs/Curriculo-Vinicius-Martins.pdf';
    else
      resume = 'assets/docs/Resume-Vinicius-Martins.pdf';

    link.href = resume;
    link.download = 'Vinicius-Martins.pdf';
    link.click();
  }

  public onChangeLanguage(language: string): void {
    this.translateService.use(language);
    this.selectedLanguage = language;
  }

  //#endregion

}
