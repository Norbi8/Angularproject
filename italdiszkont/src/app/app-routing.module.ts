import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'drink', loadChildren: () => import('./drink/drink.module').then(m => m.DrinkModule) },
  { 
    path: 'add',
    loadChildren: () => import('./add/add.module').then(m => m.AddModule),
    canActivate:[authGuard]
  },
  { 
    path: 'update/:id',
    loadChildren: () => import('./update/update.module').then(m => m.UpdateModule),
    canActivate:[authGuard]
  },
  { path: '', redirectTo:'/drink', pathMatch: 'full' },
  { path: '**', redirectTo:'/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
