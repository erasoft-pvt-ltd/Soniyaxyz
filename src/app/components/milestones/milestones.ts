import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-milestones',
  imports: [CommonModule],
  templateUrl: './milestones.html',
  styleUrl: './milestones.css'
})
export class Milestones {
  milestones = [
    {
      icon: 'fa-solid fa-id-card',
      value: '2+',
      label: 'Year Experience'
    },
    {
      icon: 'fa-solid fa-smile',
      value: '200+',
      label: 'Happy Workforce'
    },
    {
      icon: 'fa-solid fa-user-tie',
      value: '50+',
      label: 'Happy Customers'
    },
    {
      icon: 'fa-solid fa-users',
      value: '500+',
      label: 'Employment Generated'
    }
  ];
}
