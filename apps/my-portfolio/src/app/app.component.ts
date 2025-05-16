import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from '@portfolio/about-me';
import { ContactComponent } from '@portfolio/contact';
import { ExperienceComponent } from '@portfolio/experience';
import { HeroComponent } from '@portfolio/hero';
import { SkillsComponent } from '@portfolio/skills';
import { FooterComponent } from '@portfolio/ui/footer';
import { NavbarComponent } from '@portfolio/ui/navbar';
import { WorkComponent } from '@portfolio/work';

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
