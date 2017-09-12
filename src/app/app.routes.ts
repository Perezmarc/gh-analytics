import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';

export const appRoutes: Routes = [
  { path: 'repo/:id', component: RepoDetailComponent },
  { path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { title: 'GH-Analytics' }
  },
  { path: '**', component: HomeComponent }
];
