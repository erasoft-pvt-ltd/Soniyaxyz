import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-md',
  imports: [RouterLink],
  templateUrl: './about-md.html',
  styleUrl: './about-md.css'
})
export class AboutMd {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
