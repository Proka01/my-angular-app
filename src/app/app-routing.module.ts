import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateGuard } from './canCreate.guard';
import { ReadGuard } from './canRead.guard';
import { DeleteGuard } from './canDelete.guard';
import { UpdateGuard } from './canUpdate.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [ReadGuard]//,DeleteGuard,UpdateGuard], // Add this guard to the route
  },
  {
    path: 'createUser',
    component: CreateUserComponent,
    canActivate: [CreateGuard], // Add this guard to the route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
