import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LinksComponent } from './components/links/links.component';

export const ROUTES: Routes = [

    { path: 'home', component: HomeComponent  },
    { path: 'links', component: LinksComponent  },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];