import { Component, signal, output } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  openSidePanel = output<boolean>();

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
    this.openSidePanel.emit(this.isMenuOpen());
  }
}
