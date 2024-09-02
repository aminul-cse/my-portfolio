import { Component, AfterViewInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MobileNavComponent, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('typingElement') typingElement!: ElementRef;
  aboutMeText = `My passion lies in web design, and I've already achieved proficiency in several key technologies. I'm well-versed in
                HTML and CSS, allowing me to create visually appealing and responsive web pages. Additionally, I have a solid foundation
                in Tailwind CSS, which streamlines the styling process. Currently, I'm expanding my skill set by delving into
                JavaScript, a fundamental language for adding interactivity and dynamic functionality to websites. My educational
                journey also includes successfully completing C programming, which has enhanced my problem-solving abilities. I'm
                excited about the endless possibilities in the world of web design and development, and I look forward to further honing
                my skills and contributing to innovative projects in the future.`;

  ngAfterViewInit(): void {
    const typed = new Typed(this.typingElement.nativeElement, {
      strings: ['', 'Learner', 'Student', 'Web Designer', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToSection(sectionId: string) {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


