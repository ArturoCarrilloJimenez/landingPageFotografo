import { RenderMode, ServerRoute } from '@angular/ssr';
import { environment } from '../environments/environment';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
    headers: {
      'Cache-Control': `public, max-age=${
        environment.production ? 31536000 : 0
      }, immutable`,
    },
  },
  {
    path: 'aviso-legal',
    renderMode: RenderMode.Prerender,
    headers: {
      'Cache-Control': `public, max-age=${
        environment.production ? 31536000 : 0
      }, immutable`,
    },
  },
  {
    path: 'privacidad',
    renderMode: RenderMode.Prerender,
    headers: {
      'Cache-Control': `public, max-age=${
        environment.production ? 31536000 : 0
      }, immutable`,
    },
  },
  {
    path: 'cookies',
    renderMode: RenderMode.Prerender,
    headers: {
      'Cache-Control': `public, max-age=${
        environment.production ? 31536000 : 0
      }, immutable`,
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
