import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  input,
  signal,
} from '@angular/core';
import { environment } from '../../../../environments/environment';

export interface PortfolioItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  category:
    | 'Retrato Individual'
    | 'Pareja'
    | 'Paisaje'
    | 'Eventos'
    | 'Conciertos';
  style?: string;
}

@Component({
  selector: 'shared-profile',
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

  portfolioItems = input<PortfolioItem[]>([]);

  isActive: boolean[] = this.portfolioItems().map(() => false);

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
