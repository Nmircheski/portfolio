import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'crypto-sidenav',
  imports: [CommonModule],
  templateUrl: './crypto-sidenav.component.html',
  styleUrl: './crypto-sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoSidenavComponent {}
