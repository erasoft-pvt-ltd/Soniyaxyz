import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMd } from './about-md';

describe('AboutMd', () => {
  let component: AboutMd;
  let fixture: ComponentFixture<AboutMd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
