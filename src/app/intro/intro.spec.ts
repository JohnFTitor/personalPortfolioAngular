import { byText, byTextContent, createComponentFactory, Spectator } from '@ngneat/spectator';

import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
  let spectator: Spectator<IntroComponent>

  const createComponent = createComponentFactory({
    component: IntroComponent,
  })

  beforeEach(() => {
    spectator = createComponent()
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render profile information', () => {
    expect(spectator.query(byText('Andrés Felipe Arroyave Naranjo'))).toExist()
  })

  it('should render the social media icons', () => {
    const socialMediaIcons = spectator.queryAll('.social-icon')
    expect(socialMediaIcons.length).toBe(5)
  })
});
