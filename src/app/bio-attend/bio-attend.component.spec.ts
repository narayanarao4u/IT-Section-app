import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAttendComponent } from './bio-attend.component';

describe('BioAttendComponent', () => {
  let component: BioAttendComponent;
  let fixture: ComponentFixture<BioAttendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioAttendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioAttendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
