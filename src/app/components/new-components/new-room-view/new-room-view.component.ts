import {Component, Input} from '@angular/core';
import {Container, ContainerType, Room, ViewStates} from "../../../shared/types/contents";
import {FirestoreSetService} from "../../../firestore/firestore-set.service";

@Component({
  selector: 'app-new-room-view',
  templateUrl: './new-room-view.component.html',
  styleUrls: ['./new-room-view.component.scss']
})
export class NewRoomViewComponent {

  constructor(public fireSet: FirestoreSetService) {
  }

  @Input() public room: Room = {
    containers: [],
    id: "",
    roomDescription: "",
    roomName: "",
    roomPhotoUrl: ""
  }

  public currentViewState: ViewStates = ViewStates.ROOM_VIEW

  public openedContainer: Container = {
    containerDescription: "", containerName: "", containerType: ContainerType.OTHER, id: ""
  }

  public setViewableContainer(container: Container): void {
    this.openedContainer = container
    this.currentViewState = ViewStates.CONTAINER_VIEW
  }

  public setAddNewFurniture(): void {
    this.currentViewState = ViewStates.CONTAINER_ADD
  }

  public backToRoomView(): void {
    this.openedContainer = {containerDescription: "", containerName: "", containerType: ContainerType.OTHER , id: ""}
    this.currentViewState = ViewStates.ROOM_VIEW
  }

  protected readonly ContainerType = ContainerType;
  protected readonly ViewStates = ViewStates
}
