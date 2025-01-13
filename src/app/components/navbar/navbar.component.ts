import { Component, inject } from '@angular/core';
import { NavbarInterface } from "../../modules/interfaces/navbar.interface";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  //#region Injectable Properties

  private readonly modalService: ModalService = inject(ModalService);

  //#endregion

  //#region Public Properties

  public navbarList: NavbarInterface[] = [
    {
      link: '/home#about',
      name: 'Sobre mim'
    },
    {
      link: '/home#projects',
      name: 'Projetos'
    },
  ];

  public isNavbarOpen: boolean = false;

  //#endregion

  //#Region Public Methods

  public toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  public closeNavbar(): void {
    this.isNavbarOpen = false;
  }

  public openContactModal(): void {
  }

  //#endregion

}
