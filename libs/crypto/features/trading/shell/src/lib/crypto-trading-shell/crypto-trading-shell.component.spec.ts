import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoTradingShellComponent } from './crypto-trading-shell.component';

describe('CryptoTradingShellComponent', () => {
  let component: CryptoTradingShellComponent;
  let fixture: ComponentFixture<CryptoTradingShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoTradingShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoTradingShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
