import { Component, AfterViewInit, ViewChild, ElementRef, Inject,} from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import Typed from 'typed.js';
import { SendEmailComponent } from "./send-email/send-email.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MobileNavComponent,
    BackToTopComponent,
    SendEmailComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('typingElement') typingElement!: ElementRef;
  aboutMeText = `I am a seasoned Frontend Developer with extensive experience in building and optimizing responsive, user-focused web applications. My expertise spans HTML, CSS, SCSS, Tailwind CSS, and JavaScript, enabling me to create visually appealing and functional websites that deliver seamless user experiences.
In addition to frontend development, I have deep expertise in Shopify development, with proficiency in Liquid template language for building and customizing Shopify themes tailored to meet e-commerce needs. My familiarity with Angular enhances my ability to develop dynamic and scalable web solutions, ensuring smooth integration between frontend and backend systems.
Dedicated to delivering high-quality, innovative solutions, I stay up-to-date with emerging trends and technologies, consistently enhancing performance and user experience across all digital platforms.`;

  ngAfterViewInit(): void {
    const typed = new Typed(this.typingElement.nativeElement, {
      strings: ['', 'Shopify Developer', 'Web Designer', 'Frontend Developer'],
      typeSpeed: 30,
      backSpeed: 40,
      loop: true,
    });
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToSection(sectionId: string) {
    const element = this.document.getElementById(sectionId);
    if (element) {
      const target = element.offsetTop;
      const duration = 300;
      const start = window.scrollY;
      const startTime = performance.now();

      const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 2);
        window.scrollTo(0, start + (target - start) * ease);

        if (elapsed < duration) requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    }
  }
}



