import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../../shared/types/contents";

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent {
  @Input() public item: Item = {
    id: "",
    itemDescription: "",
    itemName: "",
    itemPhotoUrl: "",
    itemQuantity: 0
  }

  @Output() public openedItem: EventEmitter<Item> = new EventEmitter<Item>()

  public openItemInView():void {
    this.openedItem.emit(this.item)
  }
}
