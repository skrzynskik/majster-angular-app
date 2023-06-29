import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {FirestoreSetService} from "../../../../firestore/firestore-set.service";
import {Item} from "../../../../shared/types/contents";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  @Output() savedItem: EventEmitter<Item> = new EventEmitter<Item>()
  public itemForm!: FormGroup;
  constructor(fireSet: FirestoreSetService) {}

  public ngOnInit() {
    this.itemForm = new FormGroup<any>({
        itemName: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        itemDescription: new FormControl('', [
          Validators.required
        ]),
        itemQuantity: new FormControl(0, [
          Validators.required,
          Validators.min(1)
        ])
      }
    )
  }

  public onSubmit(): void {
    if (this.itemForm.valid) {
      const item: Item = {
        id: '',
        itemName: this.itemForm.value.itemName,
        itemDescription: this.itemForm.value.itemDescription,
        itemQuantity: this.itemForm.value.itemQuantity,
        itemPhotoUrl: ''
      }
      this.saveItem(item)
    }
  }

  public saveItem(item: Item): void {
    this.savedItem.emit(item);
  }

  public get itemName(): AbstractControl {
    return this.itemForm.get('itemName')!;
  }

  public get itemDescription(): AbstractControl {
    return this.itemForm.get('itemDescription')!;
  }

  public get itemQuantity(): AbstractControl {
    return this.itemForm.get('itemQuantity')!;
  }
}
