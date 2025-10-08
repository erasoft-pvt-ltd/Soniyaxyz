import { Component } from '@angular/core';

@Component({
  selector: 'app-about-coo-learn-more',
  imports: [],
  templateUrl: './about-coo-learn-more.html',
  styleUrl: './about-coo-learn-more.css'
})
export class AboutCooLearnMore {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
