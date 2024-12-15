import { Component } from '@angular/core';
import { SkillsComponent, Skill } from '../skills/skills.component';
@Component({
  selector: 'app-about',
  imports: [SkillsComponent],
  templateUrl: './about.tpl.html',
  styleUrls: ['./about.styles.scss'],
  standalone: true,
})
export class AboutComponent {
  skills: Skill[] = [
    { name: 'Angular' },
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'HTML/CSS' },
    { name: 'SCSS' },
    { name: 'Python' },
    { name: 'Django' },
    { name: 'Git' },
    { name: 'Github' },
    { name: 'PostgreSQL' },
    { name: 'TDD' },
    { name: 'Tailwind' },
    { name: 'SCRUM' },
    { name: 'Unit Testing' },
    { name: 'Jest' },
    { name: 'Ruby' },
    { name: 'Ruby on Rails' },
    { name: 'React Native' },
    { name: 'Redux' },
  ];
}
