export enum ProjectTypeEnum {
  ALL = 'ALL',
  PERSONAL = 'PERSONAL',
  PROFESSIONAL = 'PROFESSIONAL',
}

export const translatedProjectTypes: Record<ProjectTypeEnum, string> = {
  [ProjectTypeEnum.ALL]: 'ALL',
  [ProjectTypeEnum.PERSONAL]: 'PERSONAL',
  [ProjectTypeEnum.PROFESSIONAL]: 'PROFESSIONAL',
}
