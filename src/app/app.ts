import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Inicializar con scrollbar oculto
      document.documentElement.classList.add('hidden-scrollbar');
      document.documentElement.classList.remove('show-scrollbar');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.pageYOffset > 10) {
        document.documentElement.classList.remove('hidden-scrollbar');
        document.documentElement.classList.add('show-scrollbar');
      } else {
        document.documentElement.classList.remove('show-scrollbar');
        document.documentElement.classList.add('hidden-scrollbar');
      }
    }
  }
}
