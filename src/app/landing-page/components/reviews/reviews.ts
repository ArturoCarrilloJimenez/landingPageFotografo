import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Review {
  src: string;
  alt: string;
  srcReview: string;
}

@Component({
  selector: 'landing-page-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      src: 'images/destacadas/parejas/pareja_playa_2_v.webp',
      alt: 'Reseña de Lidia',
      srcReview: 'images/reviews/lidia.png',
    },
    {
      src: 'images/destacadas/desarollador/arturo-dev.webp',
      alt: 'Reseña de Arturo',
      srcReview: 'images/reviews/arturo-dev.png',
    },
    {
      src: 'images/destacadas/individual/anais-granada.webp',
      alt: 'Imagen vertical de la Alhambra de Granada al atardecer con luz dorada',
      srcReview: 'images/reviews/anais.png',
    },
  ];

  get reviewsWithDuplicates(): Review[] {
    return [...this.reviews, ...this.reviews, ...this.reviews];
  }

  currentIndex = 0;
  isPlaying = true;
  isTransitioning = false;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide(): void {
    if (!this.isTransitioning) {
      this.isTransitioning = true;
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    }
  }

  prevSlide(): void {
    if (!this.isTransitioning) {
      this.isTransitioning = true;
      this.currentIndex =
        (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    }
  }

  goToSlide(index: number): void {
    if (!this.isTransitioning) {
      this.isTransitioning = true;
      this.currentIndex = index;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500);
    }
  }
}
