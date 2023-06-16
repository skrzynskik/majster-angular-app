import {Component, Input, OnInit} from '@angular/core';
import {Container,Room, EditAdd} from "../../shared/types/contents";

@Component({
  selector: 'app-room-box',
  templateUrl: './room-box.component.html',
  styleUrls: ['./room-box.component.scss']
})
export class RoomBoxComponent implements OnInit {
  @Input() public room: Room = {
    containers: [],
    id: "",
    roomDescription: "",
    roomName: "",
    roomPhotoUrl: ""
  }
  public container: Container | undefined
  public editAdd: EditAdd | undefined
  constructor() {}

  public ngOnInit() {
    if (this.room.containers) {
      this.container = this.room.containers[0]
    }
  }

  public showContainerInSideBar(container: Container | undefined) {
    this.editAdd = {
      container: {
        activeAdd: false,
        activeEdit: false,
      },
      item: {
        activeAdd: false,
        activeEdit: false
      }
    }
    this.container = container
  }

  public showAddContainerInSideBar(editAdd: EditAdd | undefined): void {
    if(editAdd) {
      this.editAdd = editAdd
    }
  }

  public showAddItemInSideBar(editAdd: EditAdd | undefined): void {
    if(editAdd) {
      this.editAdd = editAdd
    }
  }
}
