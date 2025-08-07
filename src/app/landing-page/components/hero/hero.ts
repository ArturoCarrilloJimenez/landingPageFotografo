import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { environment } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

@Component({
  selector: 'landing-page-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('descriptionEl', { static: true }) descriptionEl!: ElementRef;
  private splitTextInstance: SplitText | undefined;

  contactUrl = environment.urlContact;
  message =
    'Hola, he visto tu web y me gustaría saber más sobre tus servicios de fotografía.';
  logoUrl = environment.logoUrl;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(SplitText);

      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = this.descriptionEl.nativeElement;

          // Crear SplitText inmediatamente
          this.splitTextInstance = new SplitText(el, {
            type: 'words, chars',
          });

          el.classList.remove('invisible');

          gsap.set(this.splitTextInstance.words, {
            opacity: 0,
            filter: 'blur(5px)',
            y: 50,
          });

          gsap.to(this.splitTextInstance.words, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            stagger: 0.1,
            ease: 'power2.out',
          });
        }, 400);
      });
    }
  }

  ngOnDestroy() {
    if (this.splitTextInstance) {
      this.splitTextInstance.revert();
      this.splitTextInstance = undefined;
    }
  }
}
