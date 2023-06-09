import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../auth/auth/auth.service";
import {Subscription, take} from "rxjs";
import {Container, ContainerIds} from "../shared/types/contents";
import {v4 as uuidv4} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class FirestoreSetService {
  private uidSubscription: Subscription;
  private uid: string = '';
  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {
    this.uidSubscription = this.authService.getUserUid().pipe(take(1)).subscribe(
      (uid: string) => {
        this.uid = uid
      }
    )
  }


  firebaseSetContainer(container: Container): void {
    const userContainersRef = this.afs.collection('user_containers').doc(this.uid);
    const containerRef = this.afs.collection('containers').doc(container.id);

    userContainersRef.get().subscribe((doc) => {
      if(doc.exists) {
        const data = doc.data() as ContainerIds;
        if(!data.containerIds.includes(container.id)) {
          userContainersRef.update({
            containerIds: [...data.containerIds, container.id]
          })
        }
      } else {
        userContainersRef.set({
          containerIds: [container.id]
        })
      }
    })
  }
}
