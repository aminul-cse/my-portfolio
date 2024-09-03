import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'; // Import FormsModule
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-send-email',
  standalone: true,
  imports: [FormsModule], // Include FormsModule here
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
})
export class SendEmailComponent {
  constructor() {}

  sendEmail(contactForm: NgForm) {
    // Check if the form is valid
    if (contactForm.valid) {
      const serviceID = 'service_g33v5mo';
      const templateID = 'template_t57auhd';
      const userID = 'byQdOPpWMGUQxARri';

      // Use 'sendForm' with the right parameters
      emailjs.sendForm(serviceID, templateID, '#contact-form', userID).then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          alert('Your message has been sent!');
          contactForm.reset(); // Optionally reset the form after successful submission
        },
        (error) => {
          console.error('Failed to send email.', error.text);
          alert('Failed to send your message, please try again.');
        }
      );
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
