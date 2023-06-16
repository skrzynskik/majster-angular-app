import {Component, Input, OnInit} from '@angular/core';
import {FirestoreSetService} from "../../firestore/firestore-set.service";
import {Item} from "../../shared/types/contents";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {
  @Input() public roomId: string| undefined;
  @Input() public containerId: string | undefined
  public savedItems: Item[] = []
  constructor(private fireSet:FirestoreSetService) {

  }

  public saveItem(item: Item) {
    console.log(this.savedItems)
    this.savedItems.push(item)
    console.log(this.savedItems)
  }

  public submitToFirestore(): void{
    if(this.roomId && this.containerId && this.savedItems.length) {
      console.log(this.roomId)
      console.log(this.containerId)
      this.fireSet.updateUserItem(this.roomId, this.containerId, this.savedItems)
    }
  }
}
