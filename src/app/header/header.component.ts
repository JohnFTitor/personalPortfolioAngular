import { Component, signal, output, input } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = input(false);

  openSidePanel = output<boolean>();

  toggleMenu() {
    this.openSidePanel.emit(!this.isMenuOpen());
  }
}
