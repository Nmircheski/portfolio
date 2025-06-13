import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '@portfolio/ui/icon';

@Component({
  selector: 'crypto-dashboard-currency-list-item',
  imports: [CommonModule, IconComponent],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class CurrencyListItemComponent {}
