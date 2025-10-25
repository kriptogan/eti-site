import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { ThemeService, ColorPalette } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentLang = 'heb';
  isRTL = true;
  availableThemes: ColorPalette[] = [];
  currentTheme: string = 'current';

  constructor(
    private translate: TranslateService,
    private themeService: ThemeService
  ) {
    translate.setDefaultLang('heb');
    translate.use('heb');
    this.setRTLDirection();
    
    // Debug: Check if translations are loading
    translate.get('landing.hero.title').subscribe((res: string) => {
      console.log('Translation loaded:', res);
    });
  }
  
  ngOnInit(): void {
    this.availableThemes = this.themeService.getAvailableThemes();
    this.currentTheme = this.themeService.getCurrentTheme();
    
    // Subscribe to theme changes
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  setRTLDirection() {
    document.documentElement.dir = this.isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLang;
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.isRTL = lang === 'heb';
    this.translate.use(lang);
    this.setRTLDirection();
    
    // Debug: Check translation after switch
    this.translate.get('landing.hero.title').subscribe((res: string) => {
      console.log('Translation after switch:', res);
    });
  }

  switchTheme(themeName: string) {
    this.themeService.setTheme(themeName);
  }
}
