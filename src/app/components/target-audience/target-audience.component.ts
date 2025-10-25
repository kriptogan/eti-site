import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target-audience',
  templateUrl: './target-audience.component.html',
  styleUrls: ['./target-audience.component.css']
})
export class TargetAudienceComponent implements OnInit {
  audienceItems = [
    {
      icon: 'fas fa-user-friends',
      title: 'targetAudience.item1.title',
      description: 'targetAudience.item1.description'
    },
    {
      icon: 'fas fa-exclamation-triangle',
      title: 'targetAudience.item2.title',
      description: 'targetAudience.item2.description'
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'targetAudience.item3.title',
      description: 'targetAudience.item3.description'
    },
    {
      icon: 'fas fa-heart-broken',
      title: 'targetAudience.item4.title',
      description: 'targetAudience.item4.description'
    },
    {
      icon: 'fas fa-running',
      title: 'targetAudience.item5.title',
      description: 'targetAudience.item5.description'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
