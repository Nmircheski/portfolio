import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoNavbarComponent } from './crypto-navbar.component';

describe('CryptoNavbarComponent', () => {
  let component: CryptoNavbarComponent;
  let fixture: ComponentFixture<CryptoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
