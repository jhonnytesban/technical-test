import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationAppService {
  constructor(private translate: TranslateService) {}

  init() {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
  }

  changeLang(lang: string) {
    if (lang) {
      this.translate.use(lang);
    }
  }
}
