import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../../shared/types/contents";

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent {
  @Input() public items: Item[] | undefined
  @Output() public openedItem: EventEmitter<Item | undefined> = new EventEmitter<Item | undefined>()

  public openItemInContainerView(item: Item) {
    console.log(item)
    this.openedItem.emit(item)
  }
}
