import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerrtoryPopupComponent } from './add-terrtory-popup.component';

describe('AddTerrtoryPopupComponent', () => {
  let component: AddTerrtoryPopupComponent;
  let fixture: ComponentFixture<AddTerrtoryPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTerrtoryPopupComponent]
    });
    fixture = TestBed.createComponent(AddTerrtoryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
