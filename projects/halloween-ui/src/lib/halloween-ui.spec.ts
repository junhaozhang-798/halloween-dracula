import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloweenUi } from './halloween-ui.';

describe('HalloweenUi', () => {
  let component: HalloweenUi;
  let fixture: ComponentFixture<HalloweenUi>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HalloweenUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
