import { Injectable, signal } from '@angular/core';
import { GoogleAnalyticsService } from '../../services/google-analytics';

@Injectable({ providedIn: 'root' })
export class BannerService {
  showBanner = signal(false);

  constructor(private ga: GoogleAnalyticsService) {}

  init() {
    const consent = localStorage.getItem('cookies-consent');
    this.showBanner.set(consent !== 'accepted');
  }

  resetBanner() {
    localStorage.removeItem('cookies-consent');
    this.showBanner.set(true);
  }

  acceptAll() {
    localStorage.setItem('cookies-consent', 'accepted');
    this.ga.enableGA();
    this.showBanner.set(false);
  }

  cancelAll() {
    localStorage.setItem('cookies-consent', 'denied');
    this.showBanner.set(false);
    this.ga.disableGA();
  }
}
