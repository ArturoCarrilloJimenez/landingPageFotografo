import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'aviso-legal',
    loadComponent: () =>
      import('./terms-conditions/legal-notice/legal-notice').then(
        (m) => m.LegalNotice
      ),
  },
  {
    path: 'privacidad',
    loadComponent: () =>
      import('./terms-conditions/privacy-policy/privacy-policy').then(
        (m) => m.PrivacyPolicy
      ),
  },
  {
    path: 'cookies',
    loadComponent: () =>
      import('./terms-conditions/cookies/cookies').then(
        (m) => m.Cookies
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
