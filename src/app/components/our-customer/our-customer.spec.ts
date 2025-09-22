import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCustomer } from './our-customer';

describe('OurCustomer', () => {
  let component: OurCustomer;
  let fixture: ComponentFixture<OurCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
