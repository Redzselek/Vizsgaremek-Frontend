import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'movies-series-about/:id',
    renderMode: 'none' as any
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
