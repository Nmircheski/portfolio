import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@portfolio/ui/button';
import { CardComponent } from '@portfolio/ui/card';
import { IconComponent, IconType } from '@portfolio/ui/icon';
import { PageSectionComponent } from '@portfolio/ui/page-section';
@Component({
  selector: 'portfolio-my-services',
  imports: [
    CommonModule,
    PageSectionComponent,
    CardComponent,
    IconComponent,
    ButtonComponent,
  ],
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss',
})
export class MyServicesComponent {
  services: {
    title: string;
    description: string;
    icon: IconType;
  }[] = [
    {
      title: 'UI/UX Design',
      description:
        'Transform the way you work with cutting-edge AI and automation technologies',
      icon: 'all-inclusive',
    },
    {
      title: 'Web Development',
      description:
        'Stay ahead in the digital era with tailored software solutions designed to meet your unique',
      icon: 'webhook',
    },
    {
      title: 'Motion Graphics',
      description:
        'Future-proof your business with a strategic approach to digital transformation. ',
      icon: 'memory',
    },
  ];
}
