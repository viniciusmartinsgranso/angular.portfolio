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
      link: '/home#projects',
      name: 'PROJECTS'
    },
    {
      link: '/home#contact',
      name: 'CONTACT'
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

  public downloadCurriculum(): void {
    this.modalService.create({
      component: AboutMeComponent, inputs: {
        message: 'DOWNLOAD-CURRICULUM'
      }
    });
  }

  public onChangeLanguage(language: string): void {
    this.translateService.use(language);
  }

  //#endregion

}
