import { Component } from '@angular/core';

import {
  AboutMeComponent,
  Hero,
  PricingSectionComponent,
} from './components';
import {
  BtnWhatsappComponent,
  HeaderComponent,
  InfiniteLoop,
  NavbarComponent,
  ProfileComponent,
} from '../shared/components';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ReviewsComponent } from './components/reviews/reviews';
import { portfolioItems } from './data/profileData';
import { loopImages } from './data/infinityLoop';

@Component({
  selector: 'app-landing-page',
  imports: [
    Hero,
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
}
