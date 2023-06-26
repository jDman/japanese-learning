import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'community',
    loadComponent: () => import('@learn-japanese/modules/community').then((c) => c.CommunityComponent)
  },
  {
    path: 'lessons',
    loadComponent: () => import('@learn-japanese/modules/lessons').then((c) => c.LessonsComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('@learn-japanese/modules/profile').then((c) => c.ProfileComponent)
  },
  {
    path: 'resources',
    loadComponent: () => import('@learn-japanese/modules/resources').then((c) => c.ResourcesComponent)
  }
];
