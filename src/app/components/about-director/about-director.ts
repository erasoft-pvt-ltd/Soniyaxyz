import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-director',
  imports: [RouterLink],
  templateUrl: './about-director.html',
  styleUrl: './about-director.css'
})
export class AboutDirector {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
