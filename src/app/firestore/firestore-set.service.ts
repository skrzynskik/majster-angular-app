import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../auth/auth/auth.service";
import {map, Observable, Subscription, take, tap} from "rxjs";
import {User} from "../shared/types/user";
import {Container, ContainerType, Room} from "../shared/types/contents";
import firebase from "firebase/compat/app";
import {user} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class FirestoreSetService {
  private userSubscription: Subscription;
  private userUid: string =''
  constructor(
    private af: AngularFirestore,
    private authService: AuthService
  ) {
    this.userSubscription = this.authService.getUserData().subscribe((user: User) => {
      this.userUid = user.uid;
    });
  }

  public updateUserRooms(userRoom: Room[]): void {
    userRoom[0].id = this.af.createId()
    const ref = this.af.collection<User>('users').doc(this.userUid)
    ref.get().pipe(
      take(1),
      map((user) => user.data())
    ).subscribe((user: User | undefined) => {
      const userRooms: Room[] | undefined = user?.userRooms
      if(userRooms) {
        userRooms.push(...userRoom)
        ref.update({userRooms : userRooms})
          .then(() => window.alert('Room created'))
          .catch(error => window.alert(`Error creating room: ${error}`))
      }
    })
    // ref.update({userRooms: firebase.firestore.FieldValue.arrayUnion(...userRoom)})
    //   .then(() => window.alert("user room created!"))
    //   .catch(error => window.alert(`Error occured: ${error}`))
  }

  public updateUserContainer(roomId: string, userContainer: Container[]): void {
    userContainer[0].id = this.af.createId()
    const ref = this.af.collection<User>('users').doc(this.userUid)
    ref.get().pipe(
      take(1),
      map((user) => user.data())
    ).subscribe((user: User | undefined) => {
      const userRooms: Room[] | undefined = user?.userRooms
      if(userRooms) {
        for(let i = 0; i < userRooms.length; i++) {
          if(userRooms[i].id === roomId) {
            const containers: Container[] | undefined = userRooms[i].containers
            if(containers){
              containers.push(...userContainer)
            }
            userRooms[i].containers = containers;
          }
          ref.update({userRooms : userRooms})
            .then(() => window.alert('Room created'))
            .catch(error => window.alert(`Error creating room: ${error}`))
        }
      }
    })
  }

  private removeFromArray(index:number, array:Room[] | Container[]): Room[] | Container[] {
    array.splice(index,1)
    return array
  }
}
