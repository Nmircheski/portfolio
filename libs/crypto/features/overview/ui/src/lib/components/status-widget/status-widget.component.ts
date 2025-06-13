import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-status-widget',
  imports: [CommonModule],
  templateUrl: './status-widget.component.html',
  styleUrl: './status-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusWidgetComponent {}
