import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { portfolioItems } from './data/profileData';

@Component({
  selector: 'landing-page-profile',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './profile.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  visibleItems = signal(6);
  urlContact = environment.urlContact;
  messageContact = 'Hola, he visto tu perfil y me gustaría contactarte para hablar sobre un proyecto.';

  portfolioItems = portfolioItems;

  showMoreItems = () => {
    this.visibleItems.update((v) => v + 3);
  };
}
