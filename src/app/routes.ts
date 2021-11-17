import { Routes } from "@angular/router";
import { AuthGuard } from "./core/guard/auth.guard";
import { HomeComponent } from "./pages/home/home.component";

export const appRoutes:Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent,
        loadChildren:()=> import('./pages/home/home.module').then(m=>m.HomeModule),
        canActivate:[AuthGuard]
    },
    {   
        path:'auth',
        loadChildren:()=> import('./pages/auth/auth.module').then(m=>m.AuthModule)
    }
]
