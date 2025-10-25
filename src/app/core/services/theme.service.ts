import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ColorPalette {
  name: string;
  displayName: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    textDark: string;
    textLight: string;
    bgLight: string;
    bgWhite: string;
    shadowLight: string;
    shadowMedium: string;
    gradientPrimary: string;
    gradientLight: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<string>('coastal');
  public currentTheme$ = this.currentThemeSubject.asObservable();

  private themes: { [key: string]: ColorPalette } = {
    current: {
      name: 'current',
      displayName: 'Current Pink Theme',
      colors: {
        primary: '#e91e63',
        primaryLight: '#f8bbd9',
        primaryDark: '#c2185b',
        secondary: '#9c27b0',
        accent: '#ff6b9d',
        textDark: '#2c3e50',
        textLight: '#6c757d',
        bgLight: '#f8f9fa',
        bgWhite: '#ffffff',
        shadowLight: '0 2px 10px rgba(233, 30, 99, 0.1)',
        shadowMedium: '0 4px 20px rgba(233, 30, 99, 0.15)',
        gradientPrimary: '#e91e63',
        gradientLight: '#f8bbd9'
      }
    },
    ocean: {
      name: 'ocean',
      displayName: 'Serene Ocean Blues',
      colors: {
        primary: '#2E86AB',
        primaryLight: '#A8DADC',
        primaryDark: '#1B4F72',
        secondary: '#457B9D',
        accent: '#F1FAEE',
        textDark: '#1D3557',
        textLight: '#6C757D',
        bgLight: '#F8F9FA',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(46, 134, 171, 0.1)',
        shadowMedium: '0 4px 20px rgba(46, 134, 171, 0.15)',
        gradientPrimary: '#2E86AB',
        gradientLight: '#A8DADC'
      }
    },
    sage: {
      name: 'sage',
      displayName: 'Earthy Sage Greens',
      colors: {
        primary: '#6B8E23',
        primaryLight: '#9ACD32',
        primaryDark: '#556B2F',
        secondary: '#8FBC8F',
        accent: '#F0F8E8',
        textDark: '#2F4F2F',
        textLight: '#6C757D',
        bgLight: '#F8F9FA',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(107, 142, 35, 0.1)',
        shadowMedium: '0 4px 20px rgba(107, 142, 35, 0.15)',
        gradientPrimary: '#6B8E23',
        gradientLight: '#9ACD32'
      }
    },
    terracotta: {
      name: 'terracotta',
      displayName: 'Warm Terracotta & Cream',
      colors: {
        primary: '#D2691E',
        primaryLight: '#F4A460',
        primaryDark: '#A0522D',
        secondary: '#CD853F',
        accent: '#FFFDD0',
        textDark: '#654321',
        textLight: '#8B7355',
        bgLight: '#FDF5E6',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(210, 105, 30, 0.1)',
        shadowMedium: '0 4px 20px rgba(210, 105, 30, 0.15)',
        gradientPrimary: '#D2691E',
        gradientLight: '#F4A460'
      }
    },
    lavender: {
      name: 'lavender',
      displayName: 'Soft Lavender & Mint',
      colors: {
        primary: '#8E7CC3',
        primaryLight: '#D5C7E8',
        primaryDark: '#6A4C93',
        secondary: '#98D8C8',
        accent: '#F7F3FF',
        textDark: '#4A4A4A',
        textLight: '#6C757D',
        bgLight: '#F8F9FA',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(142, 124, 195, 0.1)',
        shadowMedium: '0 4px 20px rgba(142, 124, 195, 0.15)',
        gradientPrimary: '#8E7CC3',
        gradientLight: '#D5C7E8'
      }
    },
    navy: {
      name: 'navy',
      displayName: 'Professional Navy & Gold',
      colors: {
        primary: '#1B365D',
        primaryLight: '#4A90E2',
        primaryDark: '#0F2438',
        secondary: '#D4AF37',
        accent: '#F8F9FA',
        textDark: '#2C3E50',
        textLight: '#6C757D',
        bgLight: '#F8F9FA',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(27, 54, 93, 0.1)',
        shadowMedium: '0 4px 20px rgba(27, 54, 93, 0.15)',
        gradientPrimary: '#1B365D',
        gradientLight: '#4A90E2'
      }
    },
    coral: {
      name: 'coral',
      displayName: 'Warm Coral & Peach',
      colors: {
        primary: '#FF6B6B',
        primaryLight: '#FFB3BA',
        primaryDark: '#E55555',
        secondary: '#FF8E53',
        accent: '#FFF5F5',
        textDark: '#2D3436',
        textLight: '#636E72',
        bgLight: '#FDF2F2',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(255, 107, 107, 0.1)',
        shadowMedium: '0 4px 20px rgba(255, 107, 107, 0.15)',
        gradientPrimary: '#FF6B6B',
        gradientLight: '#FFB3BA'
      }
    },
    forest: {
      name: 'forest',
      displayName: 'Deep Forest & Moss',
      colors: {
        primary: '#2D5016',
        primaryLight: '#7CB342',
        primaryDark: '#1B3009',
        secondary: '#558B2F',
        accent: '#F1F8E9',
        textDark: '#1B3009',
        textLight: '#558B2F',
        bgLight: '#F8F9FA',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(45, 80, 22, 0.1)',
        shadowMedium: '0 4px 20px rgba(45, 80, 22, 0.15)',
        gradientPrimary: '#2D5016',
        gradientLight: '#7CB342'
      }
    },
    sunset: {
      name: 'sunset',
      displayName: 'Golden Sunset & Amber',
      colors: {
        primary: '#FF8C00',
        primaryLight: '#FFB84D',
        primaryDark: '#E67E00',
        secondary: '#FFA500',
        accent: '#FFF8DC',
        textDark: '#8B4513',
        textLight: '#CD853F',
        bgLight: '#FFF8DC',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(255, 140, 0, 0.1)',
        shadowMedium: '0 4px 20px rgba(255, 140, 0, 0.15)',
        gradientPrimary: '#FF8C00',
        gradientLight: '#FFB84D'
      }
    },
    twilight: {
      name: 'twilight',
      displayName: 'Twilight Purple & Indigo',
      colors: {
        primary: '#6A4C93',
        primaryLight: '#9B59B6',
        primaryDark: '#4A2C5A',
        secondary: '#8E44AD',
        accent: '#F3E5F5',
        textDark: '#2C3E50',
        textLight: '#6C757D',
        bgLight: '#F8F9FA',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(106, 76, 147, 0.1)',
        shadowMedium: '0 4px 20px rgba(106, 76, 147, 0.15)',
        gradientPrimary: '#6A4C93',
        gradientLight: '#9B59B6'
      }
    },
    mint: {
      name: 'mint',
      displayName: 'Fresh Mint & Aqua',
      colors: {
        primary: '#00BFA5',
        primaryLight: '#4DD0E1',
        primaryDark: '#00897B',
        secondary: '#26A69A',
        accent: '#E0F2F1',
        textDark: '#004D40',
        textLight: '#00695C',
        bgLight: '#F8F9FA',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(0, 191, 165, 0.1)',
        shadowMedium: '0 4px 20px rgba(0, 191, 165, 0.15)',
        gradientPrimary: '#00BFA5',
        gradientLight: '#4DD0E1'
      }
    },
    beige: {
      name: 'beige',
      displayName: 'Warm Beige & Cream',
      colors: {
        primary: '#D2B48C',
        primaryLight: '#F5DEB3',
        primaryDark: '#BC9A6A',
        secondary: '#DEB887',
        accent: '#FFF8DC',
        textDark: '#8B7355',
        textLight: '#A0956B',
        bgLight: '#FFF8DC',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(210, 180, 140, 0.1)',
        shadowMedium: '0 4px 20px rgba(210, 180, 140, 0.15)',
        gradientPrimary: '#D2B48C',
        gradientLight: '#F5DEB3'
      }
    },
    hebrew: {
      name: 'hebrew',
      displayName: 'Hebrew Inspired Palette',
      colors: {
        primary: '#87CEEB',        /* Soft Sky Blue - Headers */
        primaryLight: '#B0E0E6',   /* Powder Blue */
        primaryDark: '#5F9EA0',   /* Cadet Blue */
        secondary: '#98FB98',     /* Sage Green - Natural elements */
        accent: '#FFB6C1',        /* Powder Pink - Small details/icons */
        textDark: '#696969',      /* Gentle Dark Gray - Text */
        textLight: '#A9A9A9',     /* Soft Gray - Secondary text */
        bgLight: '#FFF8DC',       /* Cream White - Background */
        bgWhite: '#FFFFFF',       /* Pure White */
        shadowLight: '0 2px 10px rgba(135, 206, 235, 0.1)',
        shadowMedium: '0 4px 20px rgba(135, 206, 235, 0.15)',
        gradientPrimary: '#87CEEB',
        gradientLight: '#B0E0E6'
      }
    },
    lotus: {
      name: 'lotus',
      displayName: 'Lotus Wellness & Therapy',
      colors: {
        primary: '#C9A1A1',
        primaryLight: '#DCC4C4',
        primaryDark: '#B38888',
        secondary: '#D4A5A5',
        accent: '#E8DCCF',
        textDark: '#000000',
        textLight: '#5C4E4E',
        bgLight: '#F2EBE4',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(201, 161, 161, 0.1)',
        shadowMedium: '0 4px 20px rgba(201, 161, 161, 0.15)',
        gradientPrimary: '#C9A1A1',
        gradientLight: '#DCC4C4'
      }
    },
    professional: {
      name: 'professional',
      displayName: 'Professional Rose',
      colors: {
        primary: '#E75480',
        primaryLight: '#F29AB8',
        primaryDark: '#C73D65',
        secondary: '#E86894',
        accent: '#FAFAFA',
        textDark: '#2C2C2C',
        textLight: '#6B6B6B',
        bgLight: '#F5F1E8',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(231, 84, 128, 0.1)',
        shadowMedium: '0 4px 20px rgba(231, 84, 128, 0.15)',
        gradientPrimary: '#E75480',
        gradientLight: '#F29AB8'
      }
    },// #8bcbc8 | #fdae84 |
    coastal: {
      name: 'coastal',
      displayName: 'Coastal Serenity',
      colors: {
        primary: '#46B1B1',
        primaryLight: '#7DCECE',
        primaryDark: '#157375',
        secondary: '#4AC5C5',
        accent: '#E4ECEE',
        textDark: '#2C3E50',
        textLight: '#5A6C7D',
        bgLight: '#F0D2C9',
        bgWhite: '#FFFFFF',
        shadowLight: '0 2px 10px rgba(70, 177, 177, 0.1)',
        shadowMedium: '0 4px 20px rgba(70, 177, 177, 0.15)',
        gradientPrimary: '#46B1B1',
        gradientLight: '#7DCECE'
      }
    },
    harmony: {
      name: 'harmony',
      displayName: 'Harmony 60-30-10',
      colors: {
        primary: '#7DB9B3',        /* 30% - Teal/Cyan primary color */
        primaryLight: '#A8D5D0',   /* Lighter teal */
        primaryDark: '#5A9A94',    /* Darker teal */
        secondary: '#6EAAA5',      /* Secondary teal shade */
        accent: '#F5A697',         /* 10% - Coral accent */
        textDark: '#2C3E50',       /* Dark text */
        textLight: '#5A6C7D',      /* Light text */
        bgLight: '#ffecd6',        /* 60% - Light peach/cream background */
        bgWhite: '#FFF8F2',        /* Very light cream - subtle theme tint */
        shadowLight: '0 2px 10px rgba(125, 185, 179, 0.1)',
        shadowMedium: '0 4px 20px rgba(125, 185, 179, 0.15)',
        gradientPrimary: '#7DB9B3',
        gradientLight: '#A8D5D0'
      }
    },
    summerBeach: {
      name: 'summerBeach',
      displayName: 'Summer Beach',
      colors: {
        primary: '#7DD3D0',        /* 30% - Turquoise ocean water */
        primaryLight: '#A8E5E3',   /* Light turquoise */
        primaryDark: '#5BB8B5',    /* Darker turquoise */
        secondary: '#6BCBC8',      /* Secondary turquoise */
        accent: '#F5A697',         /* 10% - Coral/peach accent */
        textDark: '#2C3E50',       /* Deep ocean text */
        textLight: '#5A6C7D',      /* Soft text */
        bgLight: '#FBE9E0',        /* 60% - Soft peachy sand */
        bgWhite: '#FFF5F0',        /* Very light cream sand */
        shadowLight: '0 2px 10px rgba(125, 211, 208, 0.1)',
        shadowMedium: '0 4px 20px rgba(125, 211, 208, 0.15)',
        gradientPrimary: '#7DD3D0',
        gradientLight: '#A8E5E3'
      }
    },
    navyPink: {
      name: 'navyPink',
      displayName: 'Professional Navy & Pink',
      colors: {
        primary: '#57b7c1db',      /* 30% - Soft cyan/turquoise */
        primaryLight: '#7DC8D1',   /* Light cyan */
        primaryDark: '#3A9BA8',    /* Darker cyan */
        secondary: '#66BFC9',      /* Secondary cyan shade */
        accent: '#E6A99A',         /* 10% - Peachy salmon pink accent */
        textDark: '#2C3E50',       /* Dark text */
        textLight: '#5A6C7D',      /* Soft grey text */
        bgLight: '#F5F1EC',        /* 60% - Light cream background */
        bgWhite: '#FDFCFA',        /* Very light cream */
        shadowLight: '0 2px 10px rgba(87, 183, 193, 0.1)',
        shadowMedium: '0 4px 20px rgba(87, 183, 193, 0.15)',
        gradientPrimary: '#57b7c1db',
        gradientLight: '#7DC8D1'
      }
    },
    mintFresh: {
      name: 'mintFresh',
      displayName: 'Fresh Mint & Rose',
      colors: {
        primary: '#64D1C3',        /* 60% - Turquoise/mint primary */
        primaryLight: '#8DDDD2',   /* Light turquoise */
        primaryDark: '#4AB8AA',    /* Darker turquoise */
        secondary: '#76D7CA',      /* Secondary turquoise */
        accent: '#F4C6C6',         /* 10% - Soft rose pink accent */
        textDark: '#2C3E50',       /* Dark text */
        textLight: '#5A6C7D',      /* Soft grey text */
        bgLight: '#64D1C3',        /* 60% - Turquoise backgrounds */
        bgWhite: '#F9F9F9',        /* 30% - Light grey/white */
        shadowLight: '0 2px 10px rgba(100, 209, 195, 0.1)',
        shadowMedium: '0 4px 20px rgba(100, 209, 195, 0.15)',
        gradientPrimary: '#64D1C3',
        gradientLight: '#8DDDD2'
      }
    }
  };

  constructor() {
    // Load saved theme from localStorage or default to coastal
    const savedTheme = localStorage.getItem('selectedTheme') || 'coastal';
    this.setTheme(savedTheme);
  }

  getAvailableThemes(): ColorPalette[] {
    return Object.values(this.themes);
  }

  getCurrentTheme(): string {
    return this.currentThemeSubject.value;
  }

  setTheme(themeName: string): void {
    if (this.themes[themeName]) {
      this.currentThemeSubject.next(themeName);
      this.applyTheme(this.themes[themeName]);
      localStorage.setItem('selectedTheme', themeName);
    }
  }

  private applyTheme(theme: ColorPalette): void {
    const root = document.documentElement;
    const colors = theme.colors;

    // Apply CSS custom properties
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--primary-light', colors.primaryLight);
    root.style.setProperty('--primary-dark', colors.primaryDark);
    root.style.setProperty('--secondary-color', colors.secondary);
    root.style.setProperty('--accent-color', colors.accent);
    root.style.setProperty('--text-dark', colors.textDark);
    root.style.setProperty('--text-light', colors.textLight);
    root.style.setProperty('--bg-light', colors.bgLight);
    root.style.setProperty('--bg-white', colors.bgWhite);
    root.style.setProperty('--shadow-light', colors.shadowLight);
    root.style.setProperty('--shadow-medium', colors.shadowMedium);
    root.style.setProperty('--gradient-primary', colors.gradientPrimary);
    root.style.setProperty('--gradient-light', colors.gradientLight);
  }

  getThemeColors(themeName: string): ColorPalette | null {
    return this.themes[themeName] || null;
  }
}
