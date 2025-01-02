import { Component, input, signal } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-learning-element',
  standalone: true,
  imports: [],
  templateUrl: './learning-element.component.html',
  styleUrl: './learning-element.component.scss',
})
export class LearningElementComponent {
  item = input<string>();
  index = input<number>(0);
}
