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
    { src: 'assets/gallery1.jpg', alt: 'Image 1', title: 'Job Fair' },
    { src: 'assets/gallery2.jpg', alt: 'Image 2', title: 'Job Fair' },
    { src: 'assets/gallery3.jpg', alt: 'Image 3', title: 'Job Fair' },
    { src: 'assets/gallery4.jpg', alt: 'Image 4', title: 'Job Fair' },
    { src: 'assets/gallery5.jpg', alt: 'Image 5', title: 'Job Fair' },
    { src: 'assets/gallery6.jpg', alt: 'Image 6', title: 'Job Fair' }
  ];

}
