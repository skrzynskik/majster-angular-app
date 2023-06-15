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
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LogoComponent } from './components/logo/logo.component';
import { SpaceViewComponent } from './components/space-view/space-view.component';
import { ContainerEntryComponent } from './components/container-entry/container-entry.component';
import { ContainerBoxComponent } from './components/container-box/container-box.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { NewRoomComponent } from './components/new-room/new-room.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewContainerComponent } from './components/new-container/new-container.component';
import { FormModalComponent } from './components/new-container/form-modal/form-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    MainViewComponent,
    ForgotPasswordComponent,
    EmailVerificationComponent,
    TopBarComponent,
    LogoComponent,
    SpaceViewComponent,
    ContainerEntryComponent,
    ContainerBoxComponent,
    ItemBoxComponent,
    NewRoomComponent,
    NewContainerComponent,
    FormModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
