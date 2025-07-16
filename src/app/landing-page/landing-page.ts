import { Component } from '@angular/core';
import { Hero } from "./templates/hero/hero";
import { InfiniteLoop } from "./templates/infinite-loop/infinite-loop";
import { BtnWhatsappComponent } from "../shared/templates/btn-whatsapp/btn-whatsapp.component";
import { AboutMeComponent } from "./templates/about-me/about-me.component";

@Component({
  selector: 'app-landing-page',
  imports: [Hero, InfiniteLoop, BtnWhatsappComponent, AboutMeComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

}
