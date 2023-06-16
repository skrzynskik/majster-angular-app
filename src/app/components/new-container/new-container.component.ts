import {Component, Input, OnInit} from '@angular/core';
import {FirestoreSetService} from "../../firestore/firestore-set.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Container, ContainerType, Room} from "../../shared/types/contents";

@Component({
  selector: 'app-new-container',
  templateUrl: './new-container.component.html',
  styleUrls: ['./new-container.component.scss']
})
export class NewContainerComponent implements OnInit{
  @Input() public roomId: string = ''
  public containerForm!: FormGroup;
  constructor(
    private fireSet: FirestoreSetService
  ) {}

  public containerTypes = [
    ContainerType.BOX,
    ContainerType.BAG,
    ContainerType.WARDROBE,
    ContainerType.DRESSER,
    ContainerType.CUPBOARD,
    ContainerType.SHELF,
    ContainerType.BASKET,
    ContainerType.OTHER,
  ]

  public ngOnInit(){
    this.containerForm = new FormGroup<any>({
      containerName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      containerDescription: new FormControl('', [
        Validators.required
      ]),
      containerType: new FormControl('', [
        Validators.required
      ])
    })
  }

  public onSubmit(): void {
    if(this.containerForm.valid) {
      const container: Container[] = [{
        id: '',
        containerName: this.containerForm.value.containerName,
        containerDescription: this.containerForm.value.containerDescription,
        containerPhotoUrl: '',
        containerType: this.containerForm.value.containerType
      }]
      this.fireSet.updateUserContainer(this.roomId,container)
      this.containerForm.reset()
    }
  }

  public get containerName(): AbstractControl {
    return this.containerForm.get('containerName')!;
  }
  public get containerDescription(): AbstractControl {
    return this.containerForm.get('containerDescription')!;
  }
  public get containerType(): AbstractControl {
    return this.containerForm.get('containerType')!;
  }

}
