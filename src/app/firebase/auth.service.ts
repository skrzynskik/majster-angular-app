import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../shared/services/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private aFirestore: AngularFirestore,
    private aFireauth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.aFireauth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', '{}');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  public signIn(email: string, password: string) {
    return this.aFireauth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        this.aFireauth.authState.subscribe((user) => {
          user
            ? this.router.navigate(['mainView'])
            : this.router.navigate(['signIn']);
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  public signUp(email: string, password: string) {
    return this.aFireauth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendVerificationMail();
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  public signInWithGoogle() {
    return this.providerSignIn(new auth.GoogleAuthProvider()).then((res:any) => {
      this.router.navigate(['mainView']);
    });
  }

  public signOut() {
    return this.aFireauth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['signIn']);
    });
  }

  public forgotPassword(passwordResetEmail: string) {
    return this.aFireauth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  public isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  private providerSignIn(provider: any) {
    return this.aFireauth
      .signInWithPopup(provider)
      .then((result) => {
        this.setUserData(result.user);
        this.router.navigate(['mainView']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  private sendVerificationMail() {
    return this.aFireauth.currentUser
      .then((u) => u?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['emailVerification']);
      });
  }

  private setUserData(user: any) {
    console.log(user)
    const userRef: AngularFirestoreDocument<any> = this.aFirestore.doc(
      `users/${user.uid}`
    );

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }
}
