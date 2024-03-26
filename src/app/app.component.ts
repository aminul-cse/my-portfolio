import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('typingElement') typingElement!: ElementRef;

  ngAfterViewInit(): void {
    const typed = new Typed(this.typingElement.nativeElement, {
      strings: ["", "Learner", "Student", "Web Designer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }
}