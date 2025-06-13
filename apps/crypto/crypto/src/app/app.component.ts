import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoNavbarComponent } from '@portfolio/crypto-ui-navbar';
import { CryptoSidenavComponent } from '@portfolio/crypto-ui-sidenav';

@Component({
  imports: [RouterModule, CryptoNavbarComponent, CryptoSidenavComponent],
  selector: 'crypto-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crypto-portfolio';
}
