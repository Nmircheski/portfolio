import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { IconComponent } from '@portfolio/ui/icon';
import { Tab } from './models';

@Component({
  selector: 'crypto-ui-tabs',
  imports: [CommonModule, IconComponent, MatTabsModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  tabsList = input.required<Tab[]>();
  hideIndicator = input(false, { transform: booleanAttribute });
}
