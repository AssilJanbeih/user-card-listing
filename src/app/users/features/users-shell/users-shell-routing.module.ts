import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListingComponent } from '../users-listing/users-listing.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  {
    path: 'users',
    component: UsersListingComponent,
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
  },
  {
    path: ':keyword',
    component: UsersListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersShellRoutingModule {
}
