import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  images = [
    { src: 'https://source.unsplash.com/random/400x400?sig=1', alt: 'Image 1', title: 'Beautiful Scene 1' },
    { src: 'https://source.unsplash.com/random/400x400?sig=2', alt: 'Image 2', title: 'Beautiful Scene 2' },
    { src: 'https://source.unsplash.com/random/400x400?sig=3', alt: 'Image 3', title: 'Beautiful Scene 3' },
    { src: 'https://source.unsplash.com/random/400x400?sig=4', alt: 'Image 4', title: 'Beautiful Scene 4' },
    { src: 'https://source.unsplash.com/random/400x400?sig=5', alt: 'Image 5', title: 'Beautiful Scene 5' },
    { src: 'https://source.unsplash.com/random/400x400?sig=6', alt: 'Image 6', title: 'Beautiful Scene 6' }
  ];

}
