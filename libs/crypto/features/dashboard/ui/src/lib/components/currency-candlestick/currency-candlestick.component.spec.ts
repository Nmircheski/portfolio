import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyCandlestickComponent } from './currency-candlestick.component';

describe('CurrencyCandlestickComponent', () => {
  let component: CurrencyCandlestickComponent;
  let fixture: ComponentFixture<CurrencyCandlestickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCandlestickComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyCandlestickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
