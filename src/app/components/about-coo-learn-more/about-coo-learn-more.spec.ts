import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCooLearnMore } from './about-coo-learn-more';

describe('AboutCooLearnMore', () => {
  let component: AboutCooLearnMore;
  let fixture: ComponentFixture<AboutCooLearnMore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCooLearnMore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCooLearnMore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
