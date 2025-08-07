import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'shared-navbar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  urlLogo = environment.logoUrl;

  firstScroll = false;

  scrolled = false;
  isOpen = false;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && window.pageYOffset > 50) {
      this.scrolled = true;
    } else if (isPlatformBrowser(this.platformId) && window.pageYOffset <= 50) {
      this.firstScroll = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset == 0) {
      this.scrolled = false;
    } else if (window.pageYOffset > 50) {
      this.scrolled = true;
    } else if (this.firstScroll) {
      this.firstScroll = false;
      this.scrollToSection('best-images-loop');
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
