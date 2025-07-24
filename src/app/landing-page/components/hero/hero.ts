import { Component } from '@angular/core';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'landing-page-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  contactUrl = environment.urlContact;
  message =
    'Hola, he visto tu web y me gustaría saber más sobre tus servicios de fotografía.';
  logoUrl = environment.logoUrl;
}
