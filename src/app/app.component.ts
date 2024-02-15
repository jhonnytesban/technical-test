import { Component } from '@angular/core';
import { TranslationAppService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  languageOptions: {label: string, value: string}[] = [
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' }
  ];

  selectedLanguage: string = 'es'; 

  constructor(private translationAppService: TranslationAppService) {
    this.translationAppService.init();
  }

  changeLanguage(): void {
    this.translationAppService.changeLang(this.selectedLanguage);
  }
}
