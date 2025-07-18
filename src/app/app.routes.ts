import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"",redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    { path: 'main',loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
    { path: '**', redirectTo: 'login' }
];
