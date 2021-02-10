import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {AuthGuard} from './shared/classes/auth.guard';
import {SendMsgPageComponent} from './send-msg-page/send-msg-page.component';
import {AddTokensPageComponent} from "./add-tokens-page/add-tokens-page.component";
import {AdminPanelPageComponent} from "./admin-panel-page/admin-panel-page.component";


const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'sendMsg', component: SendMsgPageComponent},
      {path: 'addTokens', component: AddTokensPageComponent},
      {path: 'adminPanel', component: AdminPanelPageComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
