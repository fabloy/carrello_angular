import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycardComponent } from './paycard.component';

describe('PaycardComponent', () => {
  let component: PaycardComponent;
  let fixture: ComponentFixture<PaycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
