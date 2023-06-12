import {Component, OnInit} from '@angular/core';
import {FirestoreSetService} from "../../firestore/firestore-set.service";
import {FirestoreGetService} from "../../firestore/firestore-get.service";
import {Container, ContainerIds, ContainerType} from "../../shared/types/contents";
import {delay, retryWhen, Subscription, take, tap} from "rxjs";
import {AuthService} from "../../auth/auth/auth.service";

@Component({
  selector: 'app-container-view',
  templateUrl: './container-view.component.html',
  styleUrls: ['./container-view.component.scss']
})
export class ContainerViewComponent implements OnInit {
  public containers: Container[] = [];
  constructor(
    private firebaseGet: FirestoreGetService,
  ) { }

  public ngOnInit() {
    this.fetchUserContainers()
  }

  public fetchUserContainers() {
    this.firebaseGet.firebaseGetUserContainers().pipe(take(1)).subscribe(
      (containerIds: any) => {
        console.log(containerIds);
        this.firebaseGet.firebaseGetContainersByIds(containerIds.containerIds)
          .pipe(take(1)).subscribe(
          (containers: Container[]) => {
            containers = containers.filter(Boolean)
            this.containers = containers;
          }
        )
      }
    )
  }
}
