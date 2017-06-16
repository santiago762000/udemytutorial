import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AccessGuardService} from './services/access-guard.service';

const appRoutes:Routes=[
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate: [AccessGuardService] 
    }
];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
