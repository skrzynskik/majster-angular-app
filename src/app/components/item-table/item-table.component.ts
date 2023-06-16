import {Component, Input} from '@angular/core';
import {Item} from "../../shared/types/contents";

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent {
  @Input() public items: Item[] | undefined
}
