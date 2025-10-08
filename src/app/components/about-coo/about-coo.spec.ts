import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoo } from './about-coo';

describe('AboutCoo', () => {
  let component: AboutCoo;
  let fixture: ComponentFixture<AboutCoo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCoo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCoo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
