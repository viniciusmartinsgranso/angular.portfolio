export enum ProjectTypeEnum {
  ALL = 'ALL',
  PROFESSIONAL = 'PROFESSIONAL',
  PERSONAL = 'PERSONAL',
}

export const translatedProjectTypes: Record<ProjectTypeEnum, string> = {
  [ProjectTypeEnum.ALL]: 'ALL',
  [ProjectTypeEnum.PROFESSIONAL]: 'PROFESSIONAL',
  [ProjectTypeEnum.PERSONAL]: 'PERSONAL',
}
