import { Component } from '@angular/core';

import {
  AboutMeComponent,
  PricingSectionComponent,
} from './components';
import {
  BtnWhatsappComponent,
  HeaderComponent,
  HeroComponent,
  InfiniteLoop,
  NavbarComponent,
  ProfileComponent,
} from '../shared/components';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ReviewsComponent } from './components/reviews/reviews';
import { portfolioItems } from './data/profileData';
import { loopImages } from './data/infinityLoop';
import { HeroConfig } from '../shared/components/hero/hero';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroComponent,
    InfiniteLoop,
    BtnWhatsappComponent,
    AboutMeComponent,
    HeaderComponent,
    ProfileComponent,
    PricingSectionComponent,
    NavbarComponent,
    FooterComponent,
    ReviewsComponent,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  portfolioItems = portfolioItems;
  infinityLoopImages = loopImages;
  heroConfig: HeroConfig = {
    title:
      'Fotógrafo en Almería y Granada especializado en retratos individuales, parejas, bodas, bautizos, comuniones y eventos',
    description:
      'Sesiones al aire libre en Almería, Granada, Guadix y Roquetas. Cercanía, profesionalidad y calidad garantizada en cada fotografía.',
    ctaText: 'Reserva tu sesión por WhatsApp',
    backgroundImageDesktop: '/images/hero/portada-h.webp',
    backgroundImageMobile: '/images/hero/portada-v.webp',
  };
}
