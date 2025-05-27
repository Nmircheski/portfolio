import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from '@portfolio/about-me-legacy';
import { ContactComponent } from '@portfolio/contact-legacy';
import { ExperienceComponent } from '@portfolio/experience-legacy';
import { HeroComponent } from '@portfolio/hero-legacy';
import { SkillsComponent } from '@portfolio/skills-legacy';
import { FooterComponent } from '@portfolio/ui/footer';
import { NavbarComponent } from '@portfolio/ui/navbar';
import { WorkComponent } from '@portfolio/work-legacy';

@Component({
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
}
