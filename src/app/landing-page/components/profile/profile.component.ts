import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
<<<<<<< HEAD
import { portfolioItems } from './data/profileData';
=======

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}
>>>>>>> parent of 35088aa (add: selección de imágenes)

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
  messageContact = 'Hola, he visto tu perfil y me gustaría contactarte para hablar sobre un proyecto.';

<<<<<<< HEAD
  portfolioItems = portfolioItems;
=======
  portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
    {
      id: 1,
      src: 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp',
      alt: 'Imagen 1',
      title: 'Título 1',
      description: 'Descripción 1',
      category: 'Retrato',
    },
  ];
>>>>>>> parent of 35088aa (add: selección de imágenes)

  showMoreItems = () => {
    this.visibleItems.update((v) => v + 3);
  };
}
