import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  signal,
} from '@angular/core';
import { environment } from '../../../../environments/environment';
import { portfolioItems } from './data/profileData';

@Component({
  selector: 'landing-page-profile',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './profile.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  constructor(private readonly elRef: ElementRef<HTMLElement>) {}

  visibleItems = signal(6);
  urlContact = environment.urlContact;
  messageContact =
    'Hola, he visto tu perfil y me gustaría contactarte para hablar sobre un proyecto.';

  portfolioItems = portfolioItems;

  isActive: boolean[] = portfolioItems.map(() => false);

  showMoreItems = () => {
    this.visibleItems.update((v) => v + 3);
  };

  toggleActivate(indexSelected: number) {
    this.isActive = this.isActive.map((value, index) => {
      return index == indexSelected ? !value : false;
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement | null;

    // Si selecciona algo distinto a una imagen este hace reset los valores a false
    if (!target || !target.closest('[data-portfolio-image]')) {
      this.isActive.fill(false);
    }
  }
}
