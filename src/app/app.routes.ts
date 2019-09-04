import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    {path: '', component: PagesComponent, children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: PagenofoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});