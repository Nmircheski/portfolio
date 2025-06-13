import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoOverviewShellComponent } from './crypto-overview-shell.component';

describe('CryptoOverviewShellComponent', () => {
  let component: CryptoOverviewShellComponent;
  let fixture: ComponentFixture<CryptoOverviewShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoOverviewShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoOverviewShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
