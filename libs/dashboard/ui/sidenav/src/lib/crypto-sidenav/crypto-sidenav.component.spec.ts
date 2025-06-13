import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoSidenavComponent } from './crypto-sidenav.component';

describe('CryptoSidenavComponent', () => {
  let component: CryptoSidenavComponent;
  let fixture: ComponentFixture<CryptoSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoSidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
