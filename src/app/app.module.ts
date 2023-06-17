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
import { RoomViewComponent } from './components/old-components/room-view/room-view.component';
import { ContainerBoxComponent } from './components/new-components/container-box/container-box.component';
import { NewRoomComponent } from './components/old-components/new-room/new-room.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SpaceSidebarComponent } from './components/old-components/space-sidebar/space-sidebar.component';
import {NgxSmartModalModule} from "ngx-smart-modal";
import { RoomBoxComponent } from './components/old-components/room-box/room-box.component';
import { NewContainerComponent } from './components/old-components/new-container/new-container.component';
import { NewItemComponent } from './components/old-components/new-item/new-item.component';
import { ItemFormComponent } from './components/old-components/new-item/item-form/item-form.component';
import { ItemTableComponent } from './components/old-components/item-table/item-table.component';
import { RoomsHeaderComponent } from './components/new-components/rooms-header/rooms-header.component';
import { NewRoomViewComponent } from './components/new-components/new-room-view/new-room-view.component';
import {ItemBoxComponent} from "./components/new-components/item-box/item-box.component";
import { ContainerViewComponent } from './components/new-components/container-view/container-view.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    MainViewComponent,
    ForgotPasswordComponent,
    EmailVerificationComponent,
    TopBarComponent,
    RoomViewComponent,
    ContainerBoxComponent,
    ItemBoxComponent,
    NewRoomComponent,
    SpaceSidebarComponent,
    RoomBoxComponent,
    NewContainerComponent,
    NewItemComponent,
    ItemFormComponent,
    ItemTableComponent,
    RoomsHeaderComponent,
    NewRoomViewComponent,
    ItemBoxComponent,
    ContainerViewComponent,
  ],
  imports: [
    BrowserModule,
    NgxSmartModalModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
