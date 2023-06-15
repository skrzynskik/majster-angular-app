import { Injectable } from '@angular/core';
import {AuthService} from "../auth/auth/auth.service";
import {map, Observable, of, Subscription, tap} from "rxjs";
import {User} from "../shared/types/user";
import {Container, Room} from "../shared/types/contents";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreGetService {
  private userSubscription: Subscription;
  private userUid: string = '';
  private rooms: Observable<Room[] | undefined> = of([]);
  constructor(
    private authService: AuthService,
    private af: AngularFirestore
  ) {
    this.userSubscription = this.authService.getUserData().subscribe((user: User) => {
      this.userUid = user.uid;
    });
    this.rooms = this.af.collection<User>('users').doc(this.userUid)
      .get()
      .pipe(map( user => {
        console.log(user.data()?.userRooms)
        return user.data()?.userRooms
      }))
  }

  public getRooms(): Observable<Room[] | undefined> {
    return this.rooms;
  }

  // public getContainers(roomId: string): Observable<Container[] | undefined> {
  //   return this.rooms.pipe(
  //     map((rooms: Room[] | undefined) => {
  //       if (rooms) {
  //         return rooms[+roomId].containers;
  //       } else {
  //         return undefined;
  //       }
  //     })
  //   );
  // }
}
