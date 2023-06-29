import {Component, OnInit} from '@angular/core';
import {FirestoreSetService} from "../../firestore/firestore-set.service";
import {FirestoreGetService} from "../../firestore/firestore-get.service";
import {Room} from "../../shared/types/contents";
import {map, Observable, of, tap} from "rxjs";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit{
  public rooms: Observable<Room[] | undefined> = of(undefined)

  constructor(
    private fireSet: FirestoreSetService,
    private fireGet: FirestoreGetService
  ) {}

  public ngOnInit() {
    this.fireGet.getRooms().pipe(
      map((rooms: Room[] | undefined) => {
        if (rooms) {
          return rooms
        } else {
          return undefined
        }
      })
    ).subscribe((rooms: Room[] | undefined) => {
      this.rooms = of(rooms)
    })
  }
}
