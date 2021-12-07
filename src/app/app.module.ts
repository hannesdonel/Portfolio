import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectsComponent,
    ImprintComponent,
    NavigationComponent,
    ContactComponent,
    ProjectComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressBarModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
