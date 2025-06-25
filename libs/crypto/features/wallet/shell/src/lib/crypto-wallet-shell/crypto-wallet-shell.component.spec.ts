import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoWalletShellComponent } from './crypto-wallet-shell.component';

describe('CryptoWalletShellComponent', () => {
  let component: CryptoWalletShellComponent;
  let fixture: ComponentFixture<CryptoWalletShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoWalletShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoWalletShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
