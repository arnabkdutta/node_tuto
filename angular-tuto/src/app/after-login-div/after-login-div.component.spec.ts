import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginDivComponent } from './after-login-div.component';

describe('AfterLoginDivComponent', () => {
  let component: AfterLoginDivComponent;
  let fixture: ComponentFixture<AfterLoginDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterLoginDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLoginDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
