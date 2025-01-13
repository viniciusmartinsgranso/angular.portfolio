export enum ProjectTypeEnum {
  ALL = 'ALL',
  PERSONAL = 'PERSONAL',
  PROFESSIONAL = 'PROFESSIONAL',
}

export const translatedProjectTypes: Record<ProjectTypeEnum, string> = {
  [ProjectTypeEnum.ALL]: 'Todos',
  [ProjectTypeEnum.PERSONAL]: 'Pessoais',
  [ProjectTypeEnum.PROFESSIONAL]: 'Profissionais',
}
