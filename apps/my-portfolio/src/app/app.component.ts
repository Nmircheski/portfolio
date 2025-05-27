import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from '@portfolio/about-me';
import { CtaComponent } from '@portfolio/cta';
import { ExperienceComponent } from '@portfolio/experience';
import { HeroComponent } from '@portfolio/hero';
import { MyWorkComponent } from '@portfolio/my-work';
import { SkillsComponent } from '@portfolio/skills';
import { FooterComponent } from '@portfolio/ui/footer';
import { NavbarComponent } from '@portfolio/ui/navbar';

@Component({
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    MyWorkComponent,
    CtaComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';

  public readonly navLinks = [
    { label: 'Home', path: '/#about' },
    { label: 'About me', path: '/#about' },
    { label: 'Services', path: '/#skills' },
    { label: 'Works', path: '/#skills' },
  ];
}
