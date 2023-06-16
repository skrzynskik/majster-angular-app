import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Container, ContainerType} from "../../shared/types/contents";

@Component({
  selector: 'app-container-box',
  templateUrl: './container-box.component.html',
  styleUrls: ['./container-box.component.scss']
})
export class ContainerBoxComponent {
  public showModal = false;
  @Input() public container: Container = {
    id: '',
    containerType: ContainerType.OTHER,
    containerName: '',
    containerDescription: '',
    containerPhotoUrl: ''
  }
}
