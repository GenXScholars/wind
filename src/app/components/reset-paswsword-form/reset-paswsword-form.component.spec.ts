import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPaswswordFormComponent } from './reset-paswsword-form.component';

describe('ResetPaswswordFormComponent', () => {
  let component: ResetPaswswordFormComponent;
  let fixture: ComponentFixture<ResetPaswswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPaswswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPaswswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
