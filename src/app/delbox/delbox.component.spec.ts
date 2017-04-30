import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelboxComponent } from './delbox.component';

describe('DelboxComponent', () => {
  let component: DelboxComponent;
  let fixture: ComponentFixture<DelboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
