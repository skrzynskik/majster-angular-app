import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FirestoreGetService} from "../../../firestore/firestore-get.service";
import {Container,  Room, EditAdd} from "../../../shared/types/contents";
import {Observable, of, tap} from "rxjs";
import {FirestoreSetService} from "../../../firestore/firestore-set.service";


@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent {
  @Input() public room: Room = {
    containers: [],
    id: "",
    roomDescription: "",
    roomName: "",
    roomPhotoUrl: ""
  }

  @Output() public editAdd: EventEmitter<EditAdd> = new EventEmitter<EditAdd>()
  @Output() public openedContainer: EventEmitter<Container> = new EventEmitter<Container>()

  public constructor(public fireSet: FirestoreSetService) {

  }
  public showAddContainerInSideBar(): void {
    this.editAdd.emit({
      container: {
        activeAdd: true,
        activeEdit: false
      },
      item: {
        activeAdd: false,
        activeEdit: false
      }
    })
  }

  public openContainer(container: Container): void {
    this.openedContainer.emit(container)
  }
}
