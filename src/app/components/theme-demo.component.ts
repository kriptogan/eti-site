import { Component, OnInit } from '@angular/core';
import { ThemeService, ColorPalette } from '../core/services/theme.service';

@Component({
  selector: 'app-theme-demo',
  template: `
    <div class="theme-demo-container">
      <h3>Theme Switcher Demo</h3>
      <p>Click on any theme below to see the color palette change instantly:</p>
      
      <div class="theme-grid">
        <div *ngFor="let theme of availableThemes" 
             class="theme-card" 
             [class.active]="currentTheme === theme.name"
             (click)="switchTheme(theme.name)">
          <div class="theme-preview-large" [style.background]="theme.colors.gradientPrimary"></div>
          <h5>{{ theme.displayName }}</h5>
          <div class="color-swatches">
            <div class="color-swatch" [style.background-color]="theme.colors.primary" title="Primary"></div>
            <div class="color-swatch" [style.background-color]="theme.colors.secondary" title="Secondary"></div>
            <div class="color-swatch" [style.background-color]="theme.colors.accent" title="Accent"></div>
          </div>
        </div>
      </div>
      
      <div class="current-theme-info" *ngIf="currentThemeData">
        <h4>Current Theme: {{ currentThemeData.displayName }}</h4>
        <div class="theme-colors">
          <div class="color-info">
            <span class="color-label">Primary:</span>
            <span class="color-value">{{ currentThemeData.colors.primary }}</span>
          </div>
          <div class="color-info">
            <span class="color-label">Secondary:</span>
            <span class="color-value">{{ currentThemeData.colors.secondary }}</span>
          </div>
          <div class="color-info">
            <span class="color-label">Accent:</span>
            <span class="color-value">{{ currentThemeData.colors.accent }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .theme-demo-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .theme-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    }
    
    .theme-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: var(--shadow-light);
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }
    
    .theme-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-medium);
    }
    
    .theme-card.active {
      border-color: var(--primary-color);
      box-shadow: var(--shadow-medium);
    }
    
    .theme-preview-large {
      width: 100%;
      height: 80px;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    
    .color-swatches {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .color-swatch {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid rgba(0, 0, 0, 0.1);
    }
    
    .current-theme-info {
      background: var(--bg-light);
      padding: 1.5rem;
      border-radius: 12px;
      margin-top: 2rem;
    }
    
    .theme-colors {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .color-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem;
      background: white;
      border-radius: 8px;
      min-width: 120px;
    }
    
    .color-label {
      font-size: 0.9rem;
      color: var(--text-light);
      margin-bottom: 0.25rem;
    }
    
    .color-value {
      font-family: 'Courier New', monospace;
      font-size: 0.8rem;
      color: var(--text-dark);
      font-weight: bold;
    }
  `]
})
export class ThemeDemoComponent implements OnInit {
  availableThemes: ColorPalette[] = [];
  currentTheme: string = 'current';
  currentThemeData: ColorPalette | null = null;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.availableThemes = this.themeService.getAvailableThemes();
    this.currentTheme = this.themeService.getCurrentTheme();
    
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
      this.currentThemeData = this.themeService.getThemeColors(theme);
    });
  }

  switchTheme(themeName: string): void {
    this.themeService.setTheme(themeName);
  }
}
