import { Component, ViewChild } from '@angular/core';
import { BannerCookie } from '../../shared/components/banner-cookie/banner-cookie';
import { BannerService } from '../../shared/components/banner-cookie/banner-cookie.service';

@Component({
  selector: 'app-cookies',
  imports: [],
  templateUrl: './cookies.html',
})
export class Cookies {
  constructor(public bannerService: BannerService) {}

  openBannerCookies() {
    this.bannerService.resetBanner();
  }
}
