import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

export interface LoopImage {
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'shared-infinite-loop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infinite-loop.html',
  styleUrl: './infinite-loop.scss',
})
export class InfiniteLoop {
  loopImages = input<LoopImage[]>([]);

  get loopImagesWithDuplicates(): LoopImage[] {
    return [...this.loopImages(), ...this.loopImages(), ...this.loopImages()];
  }
}
