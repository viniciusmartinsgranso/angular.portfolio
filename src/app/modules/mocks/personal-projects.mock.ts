import { ProjectTypeEnum } from "../enums/project-type.enum";
import { ProjectInterface } from "../interfaces/project.interface";
import { Technology } from "../enums/techs.enum";

export const personalProjects: ProjectInterface[] = [
  {
    name: 'Be Green',
    link: 'https://be-green-upx.vercel.app',
    image: 'assets/images/build.png',
    images: [],
    description: 'Projeto acadêmico realizado para a matéria de UPX - Engenharia Contemporânea.\n' +
      '\n' +
      'Que tem como objetivo a inclusão da sociedade nas informações sobre reciclagem, pontos de coleta, formas de reciclar, o que fazer com seus objetos que são considerados \'lixos\' e como reutilizá-los, além de receber pontos em troca de fazer o bem!\n' +
      'Realizando assim todo um ecossistema sustentabilidade na palma da sua mão.\n' +
      '\n' +
      'Aplicativo feito em Ionic com Angular Framework e atualmente com dados mockados, sendo utilizado o localstorage para o alocamento de informações.',
    type: ProjectTypeEnum.PERSONAL,
    techs: [Technology.IONIC],
  },
  {
    name: 'Help Us',
    link: 'https://help-us.vercel.app',
    image: 'assets/images/build.png',
    images: [],
    description: 'Projeto acadêmico realizado para a matéria de UPX - Engenharia Criativa, o App Help Us!\n' +
      'Que tem como objetivo a sociedade compartilhar informações entre a própria sociedade sobre ocorrências da cidade, como incêndios, desmoronamentos e batidas de trânsito.\n' +
      '\n' +
      'Aplicativo feito em Ionic com Angular Framework e atualmente com dados mockados, sendo utilizado o localstorage para o alocamento de informações.',
    type: ProjectTypeEnum.PERSONAL,
    techs: [Technology.IONIC, Technology.NESTJS, Technology.ANGULAR],
  },
  {
    name: 'Vinimail',
    link: 'https://github.com/viniciusmartinsgranso/email/',
    image: 'assets/images/build.png',
    images: [],
    description: 'Descrição',
    type: ProjectTypeEnum.PERSONAL,
    techs: [Technology.ANGULAR],
  },
  {
    name: 'Post-It',
    link: 'https://post-it-vini.vercel.app',
    description: 'Projeto criado durante o Bootcamp do LIGA - FACENS no período de 2022.',
    image: 'assets/images/build.png',
    images: [],
    type: ProjectTypeEnum.PERSONAL,
    techs: [Technology.ANGULAR, Technology.NESTJS, Technology.IONIC],
  },
]
