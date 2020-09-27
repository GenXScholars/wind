import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPaswswordFormComponent } from './components/reset-paswsword-form/reset-paswsword-form.component';

const routes: Routes = [
  {path:'', component:HomepageComponent, data: {animation: 'HomePage'}},
  {path:'login', component:LoginComponent, data: {animation: 'Login'}},
  {path:'register', component:RegisterComponent},
  {path:'resetPassword', component:ResetPaswswordFormComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
