import { Component, OnInit } from '@angular/core';
import { NavbarInterface } from "../../modules/interfaces/navbar.interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor() { }

  public navbarList: NavbarInterface[] = [
    {
      link: '/home#about',
      name: 'Sobre mim'
    },
    {
      link: '/home#personal',
      name: 'Projetos pessoais'
    },
    {
      link: '/home#job',
      name: 'Projetos profissionais'
    },
    {
      link: '/home#contact',
      name: 'Contato'
    },
    {
      link: '/home#curriculum',
      name: 'Currículo'
    },
  ];

  public isNavbarOpen: boolean = false;

  public toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;

    console.log(this.isNavbarOpen);
  }

  public closeNavbar(): void {
    this.isNavbarOpen = false;
  }

}
