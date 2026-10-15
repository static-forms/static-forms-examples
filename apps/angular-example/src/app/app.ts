import { Component } from '@angular/core';
import { ContactForm } from './contact-form/contact-form';

@Component({
  imports: [ContactForm],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
