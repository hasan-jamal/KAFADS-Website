import { CommonModule } from '@angular/common';
import { AfterViewInit, Component,OnDestroy,OnInit,Renderer2,ViewEncapsulation  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormHomePageComponent } from '../../../../components/form-home-page/form-home-page.component';
import { Header1Component } from '../../../../../shared/components/header1/header1.component';
declare var $: any;

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterModule,FormsModule,FormHomePageComponent,Header1Component],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css',
              '../../../../../../assets/css/style.css',
              '../../../../../../assets/css/header.css',
              '../../../../../../assets/css/footer.css',
              '../../../../../../assets/css/general.css'
         ],
  
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit, AfterViewInit{
  ngAfterViewInit() {
    this.initSliders();
  }
  constructor(private route: ActivatedRoute) {}
 ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  private initSliders(): void {
    // Initialize Slider 1
    $(".slider-logos").slick({
      arrows: false,
      centerMode: true,
      centerPadding: "0px",
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      dots: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 5,
            centerMode: true,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 614.4,
          settings: {
            slidesToShow: 4,
            centerMode: true,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            centerMode: false,
            centerPadding: "0px",
          },
        },
      ],
    });

    // Initialize Slider 2
    $(".slider-clients").slick({
      prevArrow: $(".arrow-left-clients"),
      nextArrow: $(".arrow-right-clients"),
      centerMode: true,
      centerPadding: "0px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 877.8,
          settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: "0px",
          },
        },
        {
          breakpoint: 614.5,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            centerPadding: "0px",
          },
        },
      ],
    });
  }
}


