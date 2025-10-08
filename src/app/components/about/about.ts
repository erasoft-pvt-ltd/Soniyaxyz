import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMd } from '../about-md/about-md';
import { AboutDirector } from '../about-director/about-director';
import { AboutCoo } from '../about-coo/about-coo';

@Component({
  selector: 'app-about',
  imports: [CommonModule, AboutMd, AboutDirector, AboutCoo],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
 servicesList = [
    { title: 'Security Services', description: '...' },
    { title: 'Detective & Private Investigation', description: '...' },
    // etc.
  ];
  activePanel: string | null = 'values'; // Default open panel

  toggleAccordion(panel: string) {
    this.activePanel = this.activePanel === panel ? null : panel;
  }
}
