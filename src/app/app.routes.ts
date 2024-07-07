import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userInfo } from 'os';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./users/features/users-shell/users-shell.module').then(m => m.UsersShellModule), 
  },
  {
    path: ``,
    loadChildren: () => import('./users/features/users-shell/users-shell.module').then(m => m.UsersShellModule), 
  },
  { path: '404-not-found', loadChildren: () => import('./shared/ui/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/404-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
