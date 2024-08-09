import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignupComponent } from './signup/signup.component'; 
import { ProfileComponent } from './profile/profile.component';   

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to /login
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent},
    { path: '**', component: ErrorPageComponent }, // Wildcard route for unknown paths - this always at last
];
