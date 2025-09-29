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
export class Reviews {
  reviews: Review[] = [
    {
      src: 'images/destacadas/individual/chica-enpoderada-vestido-negro.webp',
      alt: 'Imagen vertical de la Alhambra de Granada al atardecer con luz dorada',
      srcReview: 'image.png',
    },
  ];
}
