import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  isVisible = false;

  // Show button only after scrolling
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
