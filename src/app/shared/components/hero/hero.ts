import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { environment } from '../../../../environments/environment';

export interface HeroConfig {
  title: string;
  description: string;
  ctaText?: string;
  message?: string;
  backgroundImageDesktop?: string;
  backgroundImageMobile?: string;
}

@Component({
  selector: 'shared-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('descriptionEl', { static: true }) descriptionEl!: ElementRef;
  private splitTextInstance: SplitText | undefined;

  @Input({ required: true }) config!: HeroConfig;

  // Propiedades fijas del environment
  contactUrl = environment.urlContact;
  logoUrl = environment.logoUrl;

  get heroStyles() {
    const styles: any = {};
    if (this.config?.backgroundImageDesktop) {
      styles['background-image'] = `url(${this.config.backgroundImageDesktop})`;
    }
    return styles;
  }

  get mobileBackgroundStyle() {
    return this.config?.backgroundImageMobile
      ? `url(${this.config.backgroundImageMobile})`
      : null;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(SplitText);

      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = this.descriptionEl.nativeElement;

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
