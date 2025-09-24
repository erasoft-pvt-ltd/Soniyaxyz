import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
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
