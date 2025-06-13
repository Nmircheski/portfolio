import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'crypto-navbar',
  imports: [CommonModule],
  templateUrl: './crypto-navbar.component.html',
  styleUrl: './crypto-navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoNavbarComponent {}
