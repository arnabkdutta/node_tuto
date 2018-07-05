import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromComponentComponent } from './from-component.component';

describe('FromComponentComponent', () => {
  let component: FromComponentComponent;
  let fixture: ComponentFixture<FromComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
