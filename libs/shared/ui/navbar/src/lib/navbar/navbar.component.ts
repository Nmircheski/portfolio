import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  Renderer2,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@portfolio/ui/button';
import { IconComponent } from '@portfolio/ui/icon';

@Component({
  selector: 'portfolio-navbar',
  imports: [CommonModule, RouterModule, ButtonComponent, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  clicked() {
    alert('clicked');
  }

  isDarkTheme = signal(false);

  switchTheme() {
    throw new Error('Method not implemented.');
  }

  public readonly logoText = input('Nikola Mircheski');
  public readonly buttonText = input('');
  public readonly navLinks = input<{ label: string; path: string }[]>([
    { label: 'About', path: '/#about' },
    { label: 'Work', path: '/#skills' },
    { label: 'Contact', path: '/#contact' },
  ]);
  public readonly showThemeSwitch = input(false);
  public readonly showSideDivider = input(false);

  protected readonly sidenavOpen = signal(false);

  constructor(private readonly renderer: Renderer2) {}

  toggleMobileMenu() {
    this.sidenavOpen.update((prev) => !prev);

    if (this.sidenavOpen()) {
      this.renderer.addClass(document.body, 'sidenav-open');
    } else {
      this.renderer.removeClass(document.body, 'sidenav-open');
    }
  }
}
