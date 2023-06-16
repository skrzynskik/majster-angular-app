import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Container, EditAdd} from "../../shared/types/contents";

@Component({
  selector: 'app-space-sidebar',
  templateUrl: './space-sidebar.component.html',
  styleUrls: ['./space-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaceSidebarComponent {
  @Input() public roomId: string = ''
  @Input() public content: Container | undefined
  @Input() public editAdd: EditAdd | undefined = {
    container: {
      activeEdit: false,
      activeAdd: false,
    },
    item: {
      activeAdd: false,
      activeEdit: false
    }
  }

  @Output() public itemAdd: EventEmitter<EditAdd> = new EventEmitter<EditAdd>()

  public showItemAddInSideBar(): void {
    this.itemAdd.emit({
      container: {
        activeAdd: false,
        activeEdit: false
      },
      item: {
        activeAdd: true,
        activeEdit: false
      }
    })
  }
}
