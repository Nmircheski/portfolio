import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'crypto-dashboard-status-widget',
  imports: [CommonModule],
  templateUrl: './status-widget.component.html',
  styleUrl: './status-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusWidgetComponent {}
