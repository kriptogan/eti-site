import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  rotatingWords: string[] = [];
  currentWordIndex: number = 0;
  private intervalId: any;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Load rotating words from translations
    this.loadRotatingWords();
    
    // Start rotation animation
    this.startRotation();
    
    // Reload words when language changes
    this.translate.onLangChange.subscribe(() => {
      this.loadRotatingWords();
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private loadRotatingWords(): void {
    this.rotatingWords = [
      this.translate.instant('hero.word1'),
      this.translate.instant('hero.word2'),
      this.translate.instant('hero.word3')
    ];
  }

  private startRotation(): void {
    this.intervalId = setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.rotatingWords.length;
    }, 2500); // Change word every 2.5 seconds
  }
}
