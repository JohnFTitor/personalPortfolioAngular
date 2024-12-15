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
    { name: 'Vue' },
  ];
}
