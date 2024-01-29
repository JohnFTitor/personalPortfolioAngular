import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IntroComponent]
    });
    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render profile information', () => {
    expect(fixture.nativeElement.textContent).toContain('Andrés Felipe Arroyave Naranjo')
    expect(fixture.nativeElement.textContent).toContain('Frontend developer with')
  })

  it('should render the social media icons', () => {
    const socialMediaIcons = (fixture.nativeElement as HTMLElement).querySelectorAll('.social-icon')
    expect(socialMediaIcons.length).toBe(5) 
  })
});
