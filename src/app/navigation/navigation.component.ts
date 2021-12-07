import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import services from '../services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(
    public app: AppComponent,
  ) { }

  public aboutActive = false;

  public projectsActive = false;

  public contactActive = false;

  ngOnInit() {
    // Check if about is visible to set menu active
    document.addEventListener('scroll', (): void => {
      /* eslint-disable-next-line */
      services({ elementID: 'about' }).isInViewport()
        ? this.aboutActive = true
        : this.aboutActive = false;
    });

    // Check if projects are visible to set menu active
    document.addEventListener('scroll', (): void => {
      /* eslint-disable-next-line */
      services({ elementID: 'projects' }).isInViewport()
        ? this.projectsActive = true
        : this.projectsActive = false;
    });

    // Check if contact is visible to set menu active
    document.addEventListener('scroll', (): void => {
      /* eslint-disable-next-line */
      services({ elementID: 'contact' }).isInViewport()
        ? this.contactActive = true
        : this.contactActive = false;
    });
  }

  toggleDarkMode = (): void => {
    this.app.isDarkMode = !this.app.isDarkMode;
    localStorage.setItem('darkMode', this.app.isDarkMode.toString());
  };
}
