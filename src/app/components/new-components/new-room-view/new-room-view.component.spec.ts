import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoomViewComponent } from './new-room-view.component';

describe('NewRoomViewComponent', () => {
  let component: NewRoomViewComponent;
  let fixture: ComponentFixture<NewRoomViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRoomViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRoomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
