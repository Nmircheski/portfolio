import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoTradingUiComponent } from './crypto-trading-ui.component';

describe('CryptoTradingUiComponent', () => {
  let component: CryptoTradingUiComponent;
  let fixture: ComponentFixture<CryptoTradingUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoTradingUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoTradingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
