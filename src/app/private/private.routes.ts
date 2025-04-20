import { Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { AppRoutes } from '@/app.routes';

export const router: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: AppRoutes.private.characters,
      },
      {
        path: AppRoutes.private.characters,
        loadComponent: () =>
          import('./characters/characters.component').then(
            (m) => m.CharactersComponent,
          ),
      },
    ],
  },
];
