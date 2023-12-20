import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePublisherPopupComponent } from './delete-publisher-popup.component';

describe('DeletePublisherPopupComponent', () => {
  let component: DeletePublisherPopupComponent;
  let fixture: ComponentFixture<DeletePublisherPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePublisherPopupComponent]
    });
    fixture = TestBed.createComponent(DeletePublisherPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
