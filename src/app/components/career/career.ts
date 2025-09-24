import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  imports: [CommonModule],
  templateUrl: './career.html',
  styleUrl: './career.css'
})
export class Career {

  jobs = [
    {
      title: 'Security Guard',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Work in Bank ATM',
    },
    {
      title: 'Office Boy',
      location: 'Delhi',
      type: 'Full-time',
      description: 'Work in Offices',
    },
    {
      title: 'House Keeping',
      location: 'Mumbai, India',
      type: 'Contract',
      description: 'Work in Hospitals',
    },
  ];

}
