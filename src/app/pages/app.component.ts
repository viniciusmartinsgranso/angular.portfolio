import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { LanguagesEnum, translatedLanguages } from "../modules/enums/languages.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //#region Public Properties

  public title = 'angular.portfolio';

  //#endregion

  //#region Private Properties

  private userLocale: LanguagesEnum = LanguagesEnum.en_US;

  private readonly translateService: TranslateService = inject(TranslateService);

  private supportedLanguages: string[] = ['en', 'pt', 'es'];

  //#endregion

  //#region Public Methods

  public ngOnInit(): void {
    this.userLocale = navigator.language as LanguagesEnum;

    if (!this.supportedLanguages.includes(translatedLanguages[this.userLocale])) {
      this.userLocale = LanguagesEnum.en_US;
    }

    this.translateService.setDefaultLang(translatedLanguages[this.userLocale]);
    this.translateService.use(translatedLanguages[this.userLocale]);

    localStorage.setItem('selectedLanguage', translatedLanguages[this.userLocale]);
  }

  //#endregion
}
