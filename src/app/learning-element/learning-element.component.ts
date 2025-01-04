import { Component, input } from '@angular/core';

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

  ngAfterViewInit() {
    // Get all slide elements
    setTimeout(() => {
      const slide = document.querySelector(`#slide-${this.index()}`);

      if (!slide) return;

      // Calculate the ratio of element width to parent width
      const parentWidth =
        slide.parentElement?.getBoundingClientRect().width || 0;
      const elementWidth = slide.getBoundingClientRect().width;
      const ratio = elementWidth / parentWidth;

      // Set the CSS variable for this specific element
      slide.setAttribute(
        'style',
        `--element-width-ratio: ${ratio.toString()}; ${slide.getAttribute(
          'style'
        )}`
      );
    }, 0);
  }
}
