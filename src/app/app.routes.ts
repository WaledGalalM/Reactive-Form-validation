import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditeProfileComponent } from './edite-profile/edite-profile.component';

export const routes: Routes = [
   { path: '', redirectTo: 'EditeProfile', pathMatch: 'full' },

  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((m) => m.ProfileComponent),
  },
  {
    path: 'EditeProfile',
    loadComponent: () =>
      import('./edite-profile/edite-profile.component').then((m) => m.EditeProfileComponent),
  },
];
