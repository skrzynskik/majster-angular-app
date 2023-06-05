import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './views/email-verification/email-verification.component';
import { AuthGuard } from './auth/guard/auth.guard';
const routes: Routes = [
  {path: '', redirectTo:'/signIn', pathMatch:'full'},
  {path: 'mainView', component: MainViewComponent, canActivate: [AuthGuard]},
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'emailVerification', component: EmailVerificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
