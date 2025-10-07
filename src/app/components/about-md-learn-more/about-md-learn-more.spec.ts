import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMdLearnMore } from './about-md-learn-more';

describe('AboutMdLearnMore', () => {
  let component: AboutMdLearnMore;
  let fixture: ComponentFixture<AboutMdLearnMore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMdLearnMore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMdLearnMore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
