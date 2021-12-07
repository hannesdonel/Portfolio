import { Component, OnInit } from '@angular/core';
import services from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isDarkMode: boolean = false || localStorage.getItem('darkMode') === 'true';

  public scrollPercentage = 0;

  ngOnInit(): void {
    document.addEventListener('scroll', (): void => {
      this.scrollPercentage = services({ elementID: 'responsive-container' }).getScrollPercentage();
    });
  }

  toggleDarkMode = (): void => {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  };
}
