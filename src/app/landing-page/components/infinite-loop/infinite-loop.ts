import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface LoopImage {
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'landing-page-infinite-loop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infinite-loop.html',
  styleUrl: './infinite-loop.scss',
})
export class InfiniteLoop {
  loopImages: LoopImage[] = [
    {
      src: 'images/destacadas/individual/chica_playa_v.webp',
      alt: 'Retrato íntimo con luz natural y enfoque selectivo.',
      title: 'Retrato íntimo con luz natural y enfoque selectivo.',
    },
    {
      src: 'images/destacadas/individual/chico_barba_mirando_camara.webp',
      alt: 'Chico mirando a cámara con luz suave y fondo desenfocado.',
      title: 'Chico mirando a cámara con luz suave y fondo desenfocado.',
    },
    {
      src: 'images/destacadas/parejas/pareja_playa_v.webp',
      alt: 'Pareja abrazada en atardecer dorado (tonos cálidos).',
      title: 'Pareja abrazada en atardecer dorado (tonos cálidos).',
    },
    {
      src: 'images/destacadas/individual/chica_concierto_v.webp',
      alt: 'Artista en concierto con luz dramática y enfoque en el rostro.',
      title: 'Artista en concierto con luz dramática y enfoque en el rostro.',
    },
    {
      src: 'images/destacadas/individual/chica_vestido_negro_mirada_v.webp',
      alt: 'Chica mirando a cámara detrás de un arbusto',
      title: 'Chica mirando a cámara detrás de un arbusto',
    },
    {
      src: 'images/destacadas/individual/chico_barba_v.webp',
      alt: 'Chico viendo el paisaje con una sonrisa',
      title: 'Chico viendo el paisaje con una sonrisa',
    },
  ];

  get loopImagesWithDuplicates(): LoopImage[] {
    return [...this.loopImages, ...this.loopImages, ...this.loopImages];
  }
}
