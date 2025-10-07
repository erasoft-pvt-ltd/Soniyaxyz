import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDirectorLearnMore } from './about-director-learn-more';

describe('AboutDirectorLearnMore', () => {
  let component: AboutDirectorLearnMore;
  let fixture: ComponentFixture<AboutDirectorLearnMore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDirectorLearnMore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDirectorLearnMore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
