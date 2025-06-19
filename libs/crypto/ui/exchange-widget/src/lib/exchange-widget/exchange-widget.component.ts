import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Tab, TabsComponent } from '@portfolio/crypto-ui-tabs';
import { ButtonComponent } from '@portfolio/ui/button';
import { IconComponent } from '@portfolio/ui/icon';
@Component({
  selector: 'crypto-ui-exchange-widget',
  imports: [CommonModule, ButtonComponent, TabsComponent, IconComponent],
  templateUrl: './exchange-widget.component.html',
  styleUrl: './exchange-widget.component.scss',
})
export class ExchangeWidgetComponent {
  tabsList = signal<Tab[]>([
    {
      label: 'Limit',
    },
    {
      label: 'Market',
    },
    {
      label: 'Conditional',
    },
  ]);
}
