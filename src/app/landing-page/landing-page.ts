import { Component } from '@angular/core';
import { Hero } from "./templates/hero/hero";
import { InfiniteLoop } from "./templates/infinite-loop/infinite-loop";

@Component({
  selector: 'app-landing-page',
  imports: [Hero, InfiniteLoop],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

}
