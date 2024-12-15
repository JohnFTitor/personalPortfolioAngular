import { Component, input, OnInit } from '@angular/core';

export type Skill = {
  name: string;
  icon?: string;
  classes?: string;
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skills = input<Skill[]>([]);

  private colors = [
    'bg-indigo-600',
    'bg-slate-700',
    'bg-orange-700',
    'bg-red-900',
  ];

  getRandomStyles = () => {
    const colorIndex = Math.floor(Math.random() * this.colors.length);

    return this.colors[colorIndex];
  };

  ngOnInit(): void {
    this.skills().forEach((skill) => {
      skill.classes = this.getRandomStyles();
    });
  }
}
