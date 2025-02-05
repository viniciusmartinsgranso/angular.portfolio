export enum LanguagesEnum {
  'en_US' = 'en-US',
  'pt_BR' = 'pt-BR',
  'es_ES' = 'en-ES',
}

export const translatedLanguages: Record<LanguagesEnum, string> = {
  [LanguagesEnum.en_US]: 'en',
  [LanguagesEnum.pt_BR]: 'pt',
  [LanguagesEnum.es_ES]: 'es'
}
