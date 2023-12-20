import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignToPublisherPopupComponent } from './assign-to-publisher-popup.component';

describe('AssignToPublisherPopupComponent', () => {
  let component: AssignToPublisherPopupComponent;
  let fixture: ComponentFixture<AssignToPublisherPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignToPublisherPopupComponent]
    });
    fixture = TestBed.createComponent(AssignToPublisherPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
