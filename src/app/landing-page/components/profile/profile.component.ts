import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
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

  isActive = false;

  showMoreItems = () => {
    this.visibleItems.update((v) => v + 3);
  };

  toggleActivate() {
    this.isActive = !this.isActive;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.elRef.nativeElement.contains(target)) {
      this.isActive = false;
    }
  }
}
