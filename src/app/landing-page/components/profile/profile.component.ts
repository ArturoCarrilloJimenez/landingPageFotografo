import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { environment } from '../../../environments/environments';

interface PortfolioItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

@Component({
  selector: 'landing-page-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  visibleItems = signal(6);
  urlContact = environment.urlContact;
  messageContact =
    'Hola, he visto tu perfil y me gustaría contactarte para hablar sobre un proyecto.';

  portfolioItems: PortfolioItem[] = [
    {
      src: 'images/destacadas/individual/chica_concierto_v.webp',
      alt: 'Artista en concierto con luz dramática y enfoque en el rostro.',
      title: 'Artista en concierto con luz dramática y enfoque en el rostro.',
      description: 'Captura de un artista en concierto, resaltando la emoción del momento con luz dramática.',
      category: 'Concierto',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
  ];

  showMoreItems = () => {
    this.visibleItems.update((v) => v + 3);
  };
}
