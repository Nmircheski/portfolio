import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoinInfoComponent } from './coin-info.component';

describe('CoinInfoComponent', () => {
  let component: CoinInfoComponent;
  let fixture: ComponentFixture<CoinInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoinInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
