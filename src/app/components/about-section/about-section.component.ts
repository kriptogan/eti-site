import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  highlights = [
    'about.highlight1',
    'about.highlight2',
    'about.highlight3'
  ];

  constructor() {}

  ngOnInit(): void {}
}
