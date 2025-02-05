export enum LanguagesEnum {
  'en_US' = 'en-US',
  'pt_BR' = 'pt-BR',
}

export const translatedLanguages: Record<LanguagesEnum, string> = {
  [LanguagesEnum.en_US]: 'en',
  [LanguagesEnum.pt_BR]: 'pt',
}
