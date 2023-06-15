import {Component, OnInit} from '@angular/core';
import {FirestoreSetService} from "../../firestore/firestore-set.service";
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {initModals} from "flowbite";
import {Room} from "../../shared/types/contents";
import {map, Observable, of} from "rxjs";
import {FirestoreGetService} from "../../firestore/firestore-get.service";

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss']
})
export class NewRoomComponent implements OnInit{

  roomForm!: FormGroup
  constructor(private fireSet: FirestoreSetService) {
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

}
