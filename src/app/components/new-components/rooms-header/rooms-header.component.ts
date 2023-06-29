import {Component, Input} from '@angular/core';
import {NewRoomComponent} from "../../old-components/new-room/new-room.component";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Room} from "../../../shared/types/contents";
import {FirestoreSetService} from "../../../firestore/firestore-set.service";
import {NgxSmartModalComponent, NgxSmartModalService} from "ngx-smart-modal";
import {initModals} from "flowbite";

@Component({
  selector: 'app-rooms-header',
  templateUrl: './rooms-header.component.html',
  styleUrls: ['./rooms-header.component.scss']
})
export class RoomsHeaderComponent {
  public roomForm!: FormGroup
  @Input() room: Room = {
    containers: [],
    id: "",
    roomDescription: "",
    roomName: "",
    roomPhotoUrl: ""
  };

  constructor(private fireSet: FirestoreSetService, public ngxM: NgxSmartModalService) {
  }

  public ngOnInit() {
    initModals()

    this.roomForm = new FormGroup<any>({
      roomName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      roomDescription: new FormControl('', [
        Validators.required
      ])
    })
  }

  public onSubmit(): void {
    if(this.roomForm.valid) {
      const room: Room[] = [{
        id: '',
        roomName: this.roomForm.value.roomName,
        roomDescription: this.roomForm.value.roomDescription,
        roomPhotoUrl: '',
        containers: []
      }]

      this.fireSet.updateUserRooms(room)
      this.roomForm.reset()
    }
  }

  public get roomName(): AbstractControl {
    return this.roomForm.get('roomName')!;
  }
  public get roomDescription(): AbstractControl {
    return this.roomForm.get('roomDescription')!;
  }

  public openModal(): NgxSmartModalComponent {
    return this.ngxM.getModal('newRoomModal').open()
  }
}
