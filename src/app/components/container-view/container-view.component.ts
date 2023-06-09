import {Component} from '@angular/core';
import {FirestoreSetService} from "../../firestore/firestore-set.service";
import {FirestoreGetService} from "../../firestore/firestore-get.service";
import {Container, ContainerType} from "../../shared/types/contents";
import {take} from "rxjs";

@Component({
  selector: 'app-container-view',
  templateUrl: './container-view.component.html',
  styleUrls: ['./container-view.component.scss']
})
export class ContainerViewComponent {

  constructor(
    private firebaseSet: FirestoreSetService,
    private firebaseGet: FirestoreGetService
  ) { }

  public set() {
    const testContainer: Container = {
      containerDescription: "aaa",
      containerName: "aaa",
      containerPhotoUrl: "aaa",
      containerSpaces: [],
      containerSpacesNumber: 0,
      containerType: ContainerType.OTHER,
      id: "ccc"
    }

    this.firebaseSet.firebaseSetContainer(testContainer);
  }

  public get() {
    this.firebaseGet.firebaseGetContainerById('aaa').pipe(take(1)).subscribe(data => console.log(data))
  }
}
