import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  scrolled = false;
  isOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Cuando hayamos hecho scroll más de 50px activamos el fondo
    this.scrolled = window.pageYOffset > 50;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
