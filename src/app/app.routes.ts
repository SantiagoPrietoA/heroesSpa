import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FilteredComponent } from './components/filtered/filtered.component';


const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'heroes',  component: HeroesComponent },
    { path: 'about',  component: AboutComponent },
    { path: 'heroe/:id',  component: HeroeComponent },
    { path: 'filtered/:termino',  component: FilteredComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
