import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationAppService {
  constructor(private translate: TranslateService) {}

  init(): void {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
  }

  changeLang(lang: string): void {
    if (lang) {
      this.translate.use(lang);
    }
  }
}
