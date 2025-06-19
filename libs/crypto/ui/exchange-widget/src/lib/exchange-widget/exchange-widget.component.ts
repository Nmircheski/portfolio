import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@portfolio/ui/button';
@Component({
  selector: 'crypto-ui-exchange-widget',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './exchange-widget.component.html',
  styleUrl: './exchange-widget.component.scss',
})
export class ExchangeWidgetComponent {}
