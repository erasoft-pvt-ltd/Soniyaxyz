import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
 import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Your message has been sent!');
      form.reset();
    }
  }

}
