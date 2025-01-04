import { Component } from '@angular/core';
import { SkillsComponent, Skill } from '../skills/skills.component';
import { LearningElementComponent } from '../learning-element/learning-element.component';

@Component({
  selector: 'app-about',
  imports: [SkillsComponent, LearningElementComponent],
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

  ngAfterViewInit() {
    // Get all slide elements
    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide) => {
      // Calculate the ratio of element width to parent width
      const parentWidth = slide.parentElement?.clientWidth || 0;
      const elementWidth = slide.clientWidth;
      const ratio = elementWidth / parentWidth;

      // Set the CSS variable for this specific element
      slide.setAttribute(
        'style',
        `--element-width-ratio: ${ratio.toString()}; ${slide.getAttribute(
          'style'
        )}`
      );
    });
  }

  learning: string[] = [
    'Software Architecture',
    'Design Patterns',
    'Japanese',
    'AI',
    'Machine Learning',
  ];
}
