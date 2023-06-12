import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {forkJoin, Observable, Subscription, take} from "rxjs";
import {Container} from "../shared/types/contents";
import {AuthService} from "../auth/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class FirestoreGetService {
  private uuidSubscription: Subscription = new Subscription();
  private uid: string = '';

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {
    this.subscribeToUid()
  }
  public firebaseGetContainerById(containerId: string): Observable<Container> {
    return this.afs.collection('containers').doc(containerId).valueChanges() as Observable<Container>
  }

  public firebaseGetContainersByIds(containerIds: string[]): Observable<Container[]> {
    const observables: Observable<Container>[] = containerIds.map((containerId: string) => {
      return this.firebaseGetContainerById(containerId).pipe(take(1))
    })
    return forkJoin(observables)
  }

  public firebaseGetUserContainers(): Observable<string[]> {
    console.log(this.uid)
    return this.afs.collection('user_containers').doc(this.uid).valueChanges() as Observable<string[]>
  }

  private subscribeToUid() {
    this.uuidSubscription = this.authService.getUserUid().subscribe(
      (uid: string) => {
        this.uid = uid;
      }
    )
  }

}
