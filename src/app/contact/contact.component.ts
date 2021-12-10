import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {
  FormBuilder, FormGroup, Validators, AbstractControl, FormGroupDirective,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from '../app.component';

import services from '../services';
import { ContactData, Props } from '../data-types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private app: AppComponent,
  ) { }

  private mailUrl = 'https://uhk9pow5sb.execute-api.eu-central-1.amazonaws.com/prod/contactFormMailService';

  public dataRegulationAgreement = false;

  public loading = false;

  public openPrivacyNotice = (): void => this.app.openPrivacyNotice();

  toggleAgreement = (): void => {
    this.dataRegulationAgreement = !this.dataRegulationAgreement;
  };

  // Initiates Contact form
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    company: [''],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    phone: [''],
    message: ['', Validators.required],
    lastName: [''],
  });

  // Get form controls
  get form(): { [key: string]: AbstractControl; } { return this.contactForm.controls; }

  sendMessage = (): void => {
    this.loading = true;
    const data: ContactData = this.contactForm.value;
    const headers = new HttpHeaders();
    const props: Props = {
      snackBar: this.snackBar,
      contactForm: this.contactForm,
      isDarkMode: this.app.isDarkMode,
      formGroupDirective: this.formGroupDirective,
    };
    // Honeypot check
    if (this.contactForm.value.lastName) {
      this.loading = true;
    } else {
      const postData = (
        url: string,
        body: string,
        httpHeader: { headers: HttpHeaders },
      ): Observable<Object> => this.http.post(url, body, httpHeader)
        .pipe(
          map(services(props).handleSuccess),
          catchError((error) => {
            this.loading = false; return services(props).handleError(error);
          }),
        );

      postData(this.mailUrl, JSON.stringify(data), { headers }).subscribe(() => {
        this.loading = false;
      });
    }
  };
}
