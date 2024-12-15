import { style, transition, animate, trigger} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('150ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SidePanelComponent {

}
