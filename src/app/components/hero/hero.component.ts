import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here
    // For example: send to backend API
    
    // Reset form after submission
    this.formData = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };
  }
}
