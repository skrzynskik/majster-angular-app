import {Component, Input} from '@angular/core';
import {Container, ContainerType} from "../../shared/types/contents";

@Component({
  selector: 'app-container-box',
  templateUrl: './container-box.component.html',
  styleUrls: ['./container-box.component.scss']
})
export class ContainerBoxComponent {

  @Input() public container: Container = {
    id: '',
    containerType: ContainerType.OTHER,
    containerName: '',
    containerDescription: '',
    containerSpacesNumber: 0,
    containerSpaces: [],
    containerPhotoUrl: ''
  }
}
