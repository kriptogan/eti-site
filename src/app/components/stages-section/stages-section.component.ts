import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stages-section',
  templateUrl: './stages-section.component.html',
  styleUrls: ['./stages-section.component.css']
})
export class StagesSectionComponent implements OnInit {
  stages = [
    { number: 1, description: 'stages.stage1' },
    { number: 2, description: 'stages.stage2' },
    { number: 3, description: 'stages.stage3' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
