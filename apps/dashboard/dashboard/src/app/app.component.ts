import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoNavbarComponent } from '@dashboard/ui-navbar';
import { CryptoSidenavComponent } from '@dashboard/ui-sidenav';

@Component({
  imports: [RouterModule, CryptoNavbarComponent, CryptoSidenavComponent],
  selector: 'crypto-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crypto-dashboard';
}
