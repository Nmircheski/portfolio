import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '@portfolio/ui/icon';
import { PageSectionComponent } from '@portfolio/ui/page-section';
import { HeroStatusInfo } from './model';
@Component({
  selector: 'portfolio-hero',
  imports: [CommonModule, IconComponent, PageSectionComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  statusInfoList: HeroStatusInfo[] = [
    {
      label: 'Skopje, Macedonia',
      icon: 'location',
    },
    {
      label: 'Available for new projects',
      icon: 'status',
    },
  ];
}
