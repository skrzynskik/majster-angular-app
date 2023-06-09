import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable, Subscription, take} from "rxjs";
import {Container} from "../shared/types/contents";
import {AuthService} from "../auth/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class FirestoreGetService {
  private uuidSubscription: Subscription;
  private uid: string = '';
  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {
    this.uuidSubscription = this.authService.getUserUid().pipe(take(1)).subscribe(
      (uid: string) => {
        this.uid = uid;
      }
    )
  }
  public firebaseGetContainerById(containerId: string): Observable<Container> {
    return this.afs.collection('containers').doc(containerId).valueChanges() as Observable<Container>
  }

  public firebaseGetUserContainers(): Observable<string[]> {
    return this.afs.collection('user_containers').doc(this.uid).valueChanges() as Observable<string[]>
  }
}
