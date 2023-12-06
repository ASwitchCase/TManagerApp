import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTerrtoryPopupComponent } from './complete-terrtory-popup.component';

describe('CompleteTerrtoryPopupComponent', () => {
  let component: CompleteTerrtoryPopupComponent;
  let fixture: ComponentFixture<CompleteTerrtoryPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteTerrtoryPopupComponent]
    });
    fixture = TestBed.createComponent(CompleteTerrtoryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
