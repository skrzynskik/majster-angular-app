import { Injectable } from '@angular/core';
import {AuthService} from "../auth/auth/auth.service";
import {map, Observable, of, Subscription, switchMap, tap} from "rxjs";
import {User} from "../shared/types/user";
import {Container, Room} from "../shared/types/contents";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})

export class FirestoreGetService {
  private userUid: string = '';
  private userDocument: AngularFirestoreDocument<User> = {} as AngularFirestoreDocument<User>;

  constructor(
    private authService: AuthService,
    private af: AngularFirestore
  ) {
    this.authService.getUserData().subscribe((user: User) => {
      this.userUid = user?.uid || '';
      this.userDocument = this.af.collection<User>('users').doc(this.userUid);
    });
  }

  public getRooms(): Observable<Room[]> {
    return this.userDocument?.valueChanges().pipe(
      switchMap((user: User | undefined) => {
        if (user && user.userRooms) {
          return of(user.userRooms)
        } else {
          return of([]);
        }
      })
    ) || of([]);
  }
}
