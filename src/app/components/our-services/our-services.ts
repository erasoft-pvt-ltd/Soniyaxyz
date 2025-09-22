import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule],
  templateUrl: './our-services.html',
  styleUrl: './our-services.css'
})
export class OurServices {
  services = [
    {
      title: 'Security Services',
      image: 'assets/security.png',
      description: 'Professional security solutions to safeguard people and assets.',
    },
    {
      title: 'Recruitment / Manpower Services',
      image: 'assets/recruitment.png',
      description: 'Connecting businesses with the right workforce for growth.',
    },
    {
      title: 'Facility Management Services',
      image: 'assets/payroll.png',
      description: 'Comprehensive facility management for smooth operations.',
    }
  ];
}
