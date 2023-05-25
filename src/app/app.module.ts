import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './views/email-verification/email-verification.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    MainViewComponent,
    ForgotPasswordComponent,
    EmailVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
