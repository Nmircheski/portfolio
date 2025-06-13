import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoDashboardShellComponent } from './crypto-dashboard-shell.component';

describe('CryptoDashboardShellComponent', () => {
  let component: CryptoDashboardShellComponent;
  let fixture: ComponentFixture<CryptoDashboardShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoDashboardShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoDashboardShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
