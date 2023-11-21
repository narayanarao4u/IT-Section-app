import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcinfoComponent } from './pcinfo.component';

describe('PcinfoComponent', () => {
  let component: PcinfoComponent;
  let fixture: ComponentFixture<PcinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
