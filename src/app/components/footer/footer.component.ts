import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  
  socialLinks = [
    { icon: 'fab fa-facebook-f', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/972501234567', label: 'WhatsApp' }
  ];
  
  constructor() {}

  ngOnInit(): void {}
  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
