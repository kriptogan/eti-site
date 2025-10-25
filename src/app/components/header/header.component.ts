import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService, ColorPalette } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;
  isLanguageDropdownOpen = false;
  isThemeDropdownOpen = false;
  currentTheme: string = 'coastal';
  currentLang: string = 'en';
  availableThemes: ColorPalette[] = [];
  
  languages = [
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'heb', name: 'עברית', flag: 'עב' },
    { code: 'fr', name: 'Français', flag: 'FR' },
    { code: 'es', name: 'Español', flag: 'ES' },
    { code: 'it', name: 'Italiano', flag: 'IT' },
    { code: 'ru', name: 'Русский', flag: 'RU' },
    { code: 'dan', name: 'Dansk', flag: 'DK' }
  ];

  constructor(
    private translate: TranslateService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Get available themes
    this.availableThemes = this.themeService.getAvailableThemes();
    
    // Get current theme
    this.currentTheme = this.themeService.getCurrentTheme();
    
    // Get current language
    this.currentLang = this.translate.currentLang || this.translate.defaultLang || 'en';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.closeDropdowns();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
    this.isThemeDropdownOpen = false;
  }

  toggleThemeDropdown() {
    this.isThemeDropdownOpen = !this.isThemeDropdownOpen;
    this.isLanguageDropdownOpen = false;
  }

  closeDropdowns() {
    this.isLanguageDropdownOpen = false;
    this.isThemeDropdownOpen = false;
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    this.closeMenu();
    this.closeDropdowns();
  }

  switchTheme(themeName: string) {
    this.currentTheme = themeName;
    this.themeService.setTheme(themeName);
    this.closeDropdowns();
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.closeMenu();
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  getCurrentLanguageName(): string {
    const lang = this.languages.find(l => l.code === this.currentLang);
    return lang ? lang.flag : 'EN';
  }
}
