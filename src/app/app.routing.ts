import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {Auth0GuardService} from './services/auth0-guard.service';

const appRoutes:Routes=[
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate: [Auth0GuardService] 
    },
    { path: '**',     
    component: LoginComponent },
];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
