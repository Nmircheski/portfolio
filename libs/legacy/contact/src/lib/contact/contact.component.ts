import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@portfolio/ui/button';
import { ChipComponent } from '@portfolio/ui/chip';
import { IconComponent } from '@portfolio/ui/icon';
@Component({
  selector: 'portfolio-contact',
  imports: [CommonModule, ChipComponent, IconComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  copyEmail() {
    throw new Error('Method not implemented.');
  }
  email = 'nmircheski@gmail.com';
}
