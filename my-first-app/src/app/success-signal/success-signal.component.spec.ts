import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSignalComponent } from './success-signal.component';

describe('SuccessSignalComponent', () => {
  let component: SuccessSignalComponent;
  let fixture: ComponentFixture<SuccessSignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessSignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
