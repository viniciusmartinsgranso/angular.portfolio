import { Component, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { ProjectsInterface } from "../../modules/interfaces/projects.interface";

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

  public technologies: string[] = [
    'assets/images/Angular.png', 'assets/images/CSharp.png', 'assets/images/Python.png', 'assets/images/PHP.png', 'assets/images/JS.png', 'assets/images/Jenkins.png', 'assets/images/aws.png'
  ];

  public bio: string = 'Olá! Sou o Vinícius Martins Granso e atualmente trabalho com desenvolvimento WEB, sendo utilizado Angular Framework para criação de sites e aplicativos. ' +
    'Atualmente possuo 3 anos no LIGA - FACENS já fiz parte do desenvolvimento de alguns projetos tanto mobile quanto WEB.';

  public projects: ProjectsInterface[] = [
    {
      name: 'Be Green',
      link: 'https://be-green-upx.vercel.app',
      image: 'assets/images/Gengar.jpg',
      description: 'Projeto acadêmico realizado para a matéria de UPX - Engenharia Contemporânea.\n' +
        '\n' +
        'Que tem como objetivo a inclusão da sociedade nas informações sobre reciclagem, pontos de coleta, formas de reciclar, o que fazer com seus objetos que são considerados \'lixos\' e como reutilizá-los, além de receber pontos em troca de fazer o bem!\n' +
        'Realizando assim todo um ecossistema sustentabilidade na palma da sua mão.\n' +
        '\n' +
        'Aplicativo feito em Ionic com Angular Framework e atualmente com dados mockados, sendo utilizado o localstorage para o alocamento de informações.'
    },
    {
      name: 'Help Us',
      link: 'https://help-us.vercel.app',
      image: 'assets/images/Gengar.jpg',
      description: 'Projeto acadêmico realizado para a matéria de UPX - Engenharia Criativa, o App Help Us!\n' +
        'Que tem como objetivo a sociedade compartilhar informações entre a própria sociedade sobre ocorrências da cidade, como incêndios, desmoronamentos e batidas de trânsito.\n' +
        '\n' +
        'Aplicativo feito em Ionic com Angular Framework e atualmente com dados mockados, sendo utilizado o localstorage para o alocamento de informações.'
    },
    {
      name: 'Vinimail',
      link: 'https://github.com/viniciusmartinsgranso/email/',
      image: 'assets/images/Gengar.jpg',
      description: 'Descrição'
    },
    {
      name: 'Post-It',
      link: 'https://post-it-vini.vercel.app',
      description: 'Projeto criado durante o Bootcamp do LIGA - FACENS no período de 2022.',
      image: 'assets/images/Gengar.jpg',
    }
  ];

  public async redirectTo(route: string): Promise<void> {
    this.doc.getElementById(route)?.scrollIntoView();
  }

  public openProfileModal(): void {

  }

  public openProject(project: ProjectsInterface): void {}

}
