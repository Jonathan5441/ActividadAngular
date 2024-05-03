import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { VideojuegosComponent } from './pages/videojuegos/videojuegos.component';
import { DetallesVideojuegosComponent } from './pages/detalles-videojuegos/detalles-videojuegos.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contactos', component: ContactosComponent },
    { path: 'videojuegos',component: VideojuegosComponent },
    { path: 'videojuegos-detalles/:idVideojuegos', component: DetallesVideojuegosComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
