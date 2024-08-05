import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to /login
    { path: 'login', component: LoginComponent },
    { path: '**', component: ErrorPageComponent }, // Wildcard route for unknown paths - this always at last
];
