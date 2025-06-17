import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TradingHeaderComponent } from './trading-header.component';

describe('TradingHeaderComponent', () => {
  let component: TradingHeaderComponent;
  let fixture: ComponentFixture<TradingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradingHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TradingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
