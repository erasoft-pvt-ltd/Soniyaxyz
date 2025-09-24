import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-customer',
  imports: [CommonModule],
  templateUrl: './our-customer.html',
  styleUrl: './our-customer.css'
})
export class OurCustomer {

    customers = [
    {
      name: 'John Doe',
      company: 'ABC Pvt Ltd',
      feedback:
        'Excellent service and very professional team. Highly recommended!',
      image: 'https://i.pravatar.cc/100?img=1',
    },
    {
      name: 'Jane Smith',
      company: 'XYZ Enterprises',
      feedback:
        'Reliable and trustworthy services. We are very happy with the support.',
      image: 'https://i.pravatar.cc/100?img=2',
    },
    {
      name: 'Raj Kumar',
      company: 'TechSoft Solutions',
      feedback:
        'They understand our needs well and deliver beyond expectations.',
      image: 'https://i.pravatar.cc/100?img=3',
    },
  ];

}
