import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials = [
    { text: 'testimonials.testimonial1', author: '' },
    { text: 'testimonials.testimonial2', author: '' },
    { text: 'testimonials.testimonial3', author: '' },
    { text: 'testimonials.testimonial4', author: '' },
    { text: 'testimonials.testimonial5', author: '' }
  ];
  
  currentSlide: number = 0;
  private autoPlayInterval: any;
  private autoPlayDelay: number = 5000;
  
  constructor() {}

  ngOnInit(): void {
    this.startAutoPlay();
  }
  
  ngOnDestroy(): void {
    this.stopAutoPlay();
  }
  
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    this.resetAutoPlay();
  }
  
  previousSlide(): void {
    this.currentSlide = 
      this.currentSlide === 0 
        ? this.testimonials.length - 1 
        : this.currentSlide - 1;
    this.resetAutoPlay();
  }
  
  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoPlay();
  }
  
  private startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }
  
  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
  
  private resetAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
