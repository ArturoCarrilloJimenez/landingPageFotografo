import { Component } from '@angular/core';

import {
  InfiniteLoop,
  AboutMeComponent,
  Hero,
  PricingSectionComponent,
  ProfileComponent,
} from './components';
import { BtnWhatsappComponent, HeaderComponent, NavbarComponent } from '../shared/components';
import { FooterComponent } from "../shared/components/footer/footer.component";

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
    FooterComponent
],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
