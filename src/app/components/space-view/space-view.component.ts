import {Component, Input, OnInit} from '@angular/core';
import {FirestoreGetService} from "../../firestore/firestore-get.service";
import {Room} from "../../shared/types/contents";
import {Observable, of, tap} from "rxjs";
import {FirestoreSetService} from "../../firestore/firestore-set.service";


@Component({
  selector: 'app-space-view',
  templateUrl: './space-view.component.html',
  styleUrls: ['./space-view.component.scss']
})
export class SpaceViewComponent {

  @Input() public room: Room = {
    containers: [],
    id: "",
    roomDescription: "",
    roomName: "",
    roomPhotoUrl: ""
  }
  constructor(
    private firebaseSet: FirestoreSetService
  ) { }
}
