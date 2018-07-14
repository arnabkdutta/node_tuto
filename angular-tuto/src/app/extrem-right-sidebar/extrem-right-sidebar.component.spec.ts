import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremRightSidebarComponent } from './extrem-right-sidebar.component';

describe('ExtremRightSidebarComponent', () => {
  let component: ExtremRightSidebarComponent;
  let fixture: ComponentFixture<ExtremRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtremRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtremRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
