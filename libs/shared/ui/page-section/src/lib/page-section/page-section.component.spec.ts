import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSectionComponent } from './page-section.component';

describe('PageSectionComponent', () => {
  let component: PageSectionComponent;
  let fixture: ComponentFixture<PageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
