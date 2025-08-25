import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerService } from './banner-cookie.service';

@Component({
  selector: 'shred-banner-cookie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-cookie.html',
})
export class BannerCookie implements OnInit {
  constructor(public bannerService: BannerService) {}

  ngOnInit() {
    this.bannerService.init();
  }

  get showBanner(): boolean {
    return this.bannerService.showBanner();
  }

  acceptAll(): void {
    this.bannerService.acceptAll();
  }

  cancelAll(): void {
    this.bannerService.cancelAll();
  }
}
