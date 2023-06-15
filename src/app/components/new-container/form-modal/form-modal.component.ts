import {Component, Input, OnInit} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {Container, ContainerType, Room} from "../../../shared/types/contents";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {FirestoreSetService} from "../../../firestore/firestore-set.service";
import {FirestoreGetService} from "../../../firestore/firestore-get.service";
import {initModals} from "flowbite";

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit{
  @Input() public roomId: string = '';
  public rooms: Observable<Room[] | undefined> = of(undefined)


  public containerTypes = [
    ContainerType.BOX,
    ContainerType.BAG,
    ContainerType.WARDROBE,
    ContainerType.DRESSER,
    ContainerType.CUPBOARD,
    ContainerType.SHELF,
    ContainerType.BASKET,
    ContainerType.OTHER
  ]
  containerForm!: FormGroup

  constructor(private fireSet: FirestoreSetService, private fireGet: FirestoreGetService) {}

  public ngOnInit() {
    console.log(this.roomId)
    initModals()

    this.fireGet.getRooms().pipe(
      map((rooms: Room[] | undefined) => {
        if (rooms) {
          return rooms
        } else {
          return undefined
        }
      })
    ).subscribe((rooms: Room[] | undefined) => {
      this.rooms = of(rooms)
    })

    this.containerForm = new FormGroup<any>({
      room: new FormControl('', [
        Validators.required
      ]),
      containerName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      containerDescription: new FormControl(this.roomId, [
        Validators.required,
      ]),
      containerType: new FormControl(this.containerTypes[0], [
        Validators.required
      ])
    })
  }

  public get room(): AbstractControl {
    return this.containerForm.get('room')!
  }
  public get containerName(): AbstractControl {
    return this.containerForm.get('containerName')!
  }
  public get containerDescription(): AbstractControl {
    return this.containerForm.get('containerDescription')!
  }
  public get containerType(): AbstractControl {
    return this.containerForm.get('containerType')!
  }

  public onSubmit():void {
    if(this.containerForm.valid) {
      console.log(this.containerForm.value)

      const container: Container[] = [{
        id: '',
        containerName: this.containerForm.value.containerName,
        containerDescription: this.containerForm.value.containerDescription,
        containerType: this.containerForm.value.containerType
      }]

      this.fireSet.updateUserContainer(this.containerForm.value.room, container)
      this.containerForm.reset()
    }
  }


}
