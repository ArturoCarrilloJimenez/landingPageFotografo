import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title:
      'Photo Josma | Fotógrafo Profesional en Almería, Granada y Andalucía Oriental',
    loadComponent: () =>
      import('./landing-page/landing-page').then((m) => m.LandingPage),
  },
  {
    path: 'aviso-legal',
    title: 'Aviso Legal | Photo Josma - Fotografía Profesional',
    loadComponent: () =>
      import('./terms-conditions/legal-notice/legal-notice').then(
        (m) => m.LegalNotice
      ),
  },
  {
    path: 'privacidad',
    title: 'Política de Privacidad | Photo Josma - Fotógrafo en Andalucía',
    loadComponent: () =>
      import('./terms-conditions/privacy-policy/privacy-policy').then(
        (m) => m.PrivacyPolicy
      ),
  },
  {
    path: 'cookies',
    title:
      'Política de Cookies | Photo Josma - Fotografía en Almería y Granada',
    loadComponent: () =>
      import('./terms-conditions/cookies/cookies').then((m) => m.Cookies),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
