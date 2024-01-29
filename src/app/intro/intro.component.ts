import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedinIn, faMediumM, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.tpl.html',
  styleUrls: ['./intro.styles.scss'],
  standalone: true,
  imports: [FontAwesomeModule]
})
export class IntroComponent {
  icons = {
    github: faGithub,
    linkedIn: faLinkedinIn,
    medium: faMediumM,
    twitter: faXTwitter,
    youtube: faYoutube,
  }
}
