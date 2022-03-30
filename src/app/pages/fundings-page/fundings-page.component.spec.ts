import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingsPageComponent } from './fundings-page.component';

describe('FundingsPageComponent', () => {
  let component: FundingsPageComponent;
  let fixture: ComponentFixture<FundingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
