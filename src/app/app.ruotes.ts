import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroreComponent } from './components/herore/herore.component';


const app_routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroreComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
