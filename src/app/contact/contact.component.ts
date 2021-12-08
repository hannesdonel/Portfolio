import { Component } from '@angular/core';
import {
  HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import {
  FormBuilder, FormGroup, Validators, AbstractControl,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from '../app.component';

import { ContactData } from '../data-types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private app: AppComponent,
  ) { }

  private mailUrl = 'https://uhk9pow5sb.execute-api.eu-central-1.amazonaws.com/prod/contactFormMailService';

  // Initiates Contact form
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    company: [''],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    phone: [''],
    message: ['', Validators.required],
  });

  // Get form controls
  get form(): { [key: string]: AbstractControl; } { return this.contactForm.controls; }

  private handleError = (error: HttpErrorResponse) => {
    if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.',
    );
  };

  private handleSuccess = (): void => {
    this.snackBar.open(
      `Thank you ${this.contactForm.value.name}, your message has successfully been sent.`,
      'Nice',
      { duration: 3000, panelClass: ['snack-bar', this.app.isDarkMode ? 'dark-theme' : 'hi'] },
    );
  };

  sendMessage = (): void => {
    const data: ContactData = this.contactForm.value;
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    console.log(data);

    this.http.post(this.mailUrl, JSON.stringify(data), { headers })
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
      );
  };
}
