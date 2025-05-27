import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChipComponent } from '@portfolio/ui/chip';
import { PageSectionComponent } from '@portfolio/ui/page-section';
@Component({
  selector: 'portfolio-about-me',
  imports: [CommonModule, ChipComponent, PageSectionComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {}
