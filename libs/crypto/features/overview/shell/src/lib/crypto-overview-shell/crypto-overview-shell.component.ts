import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'crypto-overview-crypto-overview-shell',
  imports: [CommonModule],
  templateUrl: './crypto-overview-shell.component.html',
  styleUrl: './crypto-overview-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoOverviewShellComponent {}
