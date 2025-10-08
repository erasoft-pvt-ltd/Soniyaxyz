import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-coo',
  imports: [RouterLink],
  templateUrl: './about-coo.html',
  styleUrl: './about-coo.css'
})
export class AboutCoo {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
