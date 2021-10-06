import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';

const routes: Routes = [
  { path: '', component: TemplateComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
  { path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
  { path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'usermanagement', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
  { path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
  { path: 'createscreen', loadChildren: () => import('./createscreen/createscreen.module').then(m => m.CreatescreenModule), canActivate: [AuthGuard] },
  { path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule), canActivate: [AuthGuard] },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
