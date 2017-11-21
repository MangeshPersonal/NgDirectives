import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppcomponentComponent } from './new-appcomponent.component';

describe('NewAppcomponentComponent', () => {
  let component: NewAppcomponentComponent;
  let fixture: ComponentFixture<NewAppcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
