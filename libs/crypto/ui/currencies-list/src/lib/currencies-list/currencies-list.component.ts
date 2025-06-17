import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '@portfolio/ui/icon';
@Component({
  selector: 'crypto-ui-currencies-list',
  imports: [CommonModule, IconComponent],
  templateUrl: './currencies-list.component.html',
  styleUrl: './currencies-list.component.scss',
})
export class CurrenciesListComponent {}
