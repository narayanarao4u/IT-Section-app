import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdataComponent } from './ipdata.component';

describe('IpdataComponent', () => {
  let component: IpdataComponent;
  let fixture: ComponentFixture<IpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
