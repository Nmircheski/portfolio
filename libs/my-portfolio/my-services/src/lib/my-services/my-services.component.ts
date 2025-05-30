import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@portfolio/ui/card';
import { IconComponent } from '@portfolio/ui/icon';
import { PageSectionComponent } from '@portfolio/ui/page-section';
@Component({
  selector: 'portfolio-my-services',
  imports: [CommonModule, PageSectionComponent, CardComponent, IconComponent],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss',
})
export class MyServicesComponent {
  services = [
    {
      title: 'UI/UX Design',
      description: 'lorem ipsum dolor sit amet consectur adi pising leo',
      icon: 'web',
    },
    {
      title: 'Web Development',
      description: 'lorem ipsum dolor sit amet consectur adi pising leo',
      icon: 'web',
    },
    {
      title: 'Motion Graphics',
      description: 'lorem ipsum dolor sit amet consectur adi pising leo',
      icon: 'web',
    },
  ];
}
