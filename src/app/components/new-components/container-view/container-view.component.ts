import {Component, Input} from '@angular/core';
import {Container, ContainerType, Item, ViewStates} from "../../../shared/types/contents";

@Component({
  selector: 'app-container-view',
  templateUrl: './container-view.component.html',
  styleUrls: ['./container-view.component.scss']
})
export class ContainerViewComponent {
  @Input() public container: Container = {
    containerDescription: "", containerName: "", containerType: ContainerType.OTHER, id: ""
  }
  @Input() public roomId: string = ''

  public viewStates: ViewStates = ViewStates.ITEM_VIEW

  public openedItem: Item = {
    id: "", itemDescription: "", itemName: "", itemPhotoUrl: "", itemQuantity: 0

  }
  protected readonly ViewStates = ViewStates;

  public setItemAddView(): void {
    this.viewStates = ViewStates.ITEM_ADD
  }
  public setItemView(): void {
    this.viewStates = ViewStates.ITEM_VIEW
  }

  public setOpenedItem(item: Item | undefined): void {
    console.log(item)
    if(item) {
      this.openedItem = item
      this.viewStates = ViewStates.ITEM_SPECIFIC_VIEW
    }
  }
}
