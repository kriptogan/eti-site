import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-method-section',
  templateUrl: './method-section.component.html',
  styleUrls: ['./method-section.component.css']
})
export class MethodSectionComponent implements OnInit {
  methodAspects = [
    { icon: 'fas fa-user-circle fa-3x', label: 'method.aspect1' },
    { icon: 'fas fa-birthday-cake fa-3x', label: 'method.aspect2' },
    { icon: 'fas fa-heartbeat fa-3x', label: 'method.aspect3' },
    { icon: 'fas fa-life-ring fa-3x', label: 'method.aspect4' },
    { icon: 'fas fa-chart-line fa-3x', label: 'method.aspect5' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
