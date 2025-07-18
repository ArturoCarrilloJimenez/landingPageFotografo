import { Component } from '@angular/core';
import { Hero } from './templates/hero/hero';
import { InfiniteLoop } from './templates/infinite-loop/infinite-loop';
import { BtnWhatsappComponent } from '../shared/templates/btn-whatsapp/btn-whatsapp.component';
import { AboutMeComponent } from './templates/about-me/about-me.component';
import { HeaderComponent } from '../shared/templates/header/header.component';
import { ProfileComponent } from './templates/profile/profile.component';
import { PricingSectionComponent } from "./templates/pricing-section/pricing-section.component";

@Component({
  selector: 'app-landing-page',
  imports: [
    Hero,
    InfiniteLoop,
    BtnWhatsappComponent,
    AboutMeComponent,
    HeaderComponent,
    ProfileComponent,
    PricingSectionComponent
],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
