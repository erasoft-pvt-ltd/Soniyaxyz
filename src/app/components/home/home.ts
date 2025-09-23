import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules'; 
import { CommonModule } from '@angular/common';
import { OurServices } from "../our-services/our-services";
import { Milestones } from '../milestones/milestones';
Swiper.use([Navigation]);
export const slideArray = [
  {
    url: 'assets/home.png',
    header: 'SPREE O\'CLOCK',
    subHeader: 'IT’S&nbsp;&nbsp;ABOUT&nbsp;&nbsp;TIME',
    signupTitle: 'ARE YOU A NEW USER?',
    signinTitle: 'ALREADY A USER?',
  },
  {
    url: 'assets/service.png',
    header: 'SPREE O\'CLOCK',
    subHeader: 'IT’S&nbsp;&nbsp;ABOUT&nbsp;&nbsp;TIME',
    signupTitle: 'ARE YOU A NEW USER?',
    signinTitle: 'ALREADY A USER?',
  },
  {
    url: 'assets/about1.png',
    header: 'FUN O\'CLOCK',
    subHeader: 'IT’S&nbsp;&nbsp;ABOUT&nbsp;&nbsp;TIME',
    signupTitle: 'ARE YOU A NEW USER?',
    signinTitle: 'ALREADY  A USER?',
  }
];
Swiper.use([ Pagination, Navigation]);
@Component({
  selector: 'app-home',
  imports: [CommonModule, OurServices,Milestones],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {
  slideArray = slideArray
  swiperInstance: any;
  activeIndex: number = 0;

  ngAfterViewInit() {
    this.getSwiperdashboard()
  }


  OnInit() {
    console.log('this.slideArray in slide components', this.slideArray);
  }


  getSwiperdashboard() {
    const swiper = new Swiper('.mySwiper', {
      // Optional parameters
      loop: true,
      speed: 400,
      spaceBetween: 100,
      autoplay: {
        delay: 3000,
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  trackByFn(index: number) {
    return index;
  }

}
