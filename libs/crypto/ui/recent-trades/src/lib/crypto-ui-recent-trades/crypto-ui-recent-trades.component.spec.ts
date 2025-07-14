import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoUiRecentTradesComponent } from './crypto-ui-recent-trades.component';

describe('CryptoUiRecentTradesComponent', () => {
  let component: CryptoUiRecentTradesComponent;
  let fixture: ComponentFixture<CryptoUiRecentTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoUiRecentTradesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoUiRecentTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
