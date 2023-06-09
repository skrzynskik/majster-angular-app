import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerEntryComponent } from './container-entry.component';

describe('ContainerEntryComponent', () => {
  let component: ContainerEntryComponent;
  let fixture: ComponentFixture<ContainerEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
