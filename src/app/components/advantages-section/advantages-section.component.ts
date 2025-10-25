import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages-section',
  templateUrl: './advantages-section.component.html',
  styleUrls: ['./advantages-section.component.css']
})
export class AdvantagesSectionComponent implements OnInit {
  advantages = [
    { title: 'advantages.shortTerm.title', description: 'advantages.shortTerm.description' },
    { title: 'advantages.focused.title', description: 'advantages.focused.description' },
    { title: 'advantages.rootCause.title', description: 'advantages.rootCause.description' },
    { title: 'advantages.practical.title', description: 'advantages.practical.description' },
    { title: 'advantages.longTerm.title', description: 'advantages.longTerm.description' },
    { title: 'advantages.active.title', description: 'advantages.active.description' },
    { title: 'advantages.structured.title', description: 'advantages.structured.description' },
    { title: 'advantages.measurable.title', description: 'advantages.measurable.description' }
  ];

  flippedStates: boolean[] = new Array(8).fill(false);

  constructor() {}

  ngOnInit(): void {}

  toggleCard(index: number): void {
    this.flippedStates[index] = !this.flippedStates[index];
  }
}
