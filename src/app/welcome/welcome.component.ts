import { Component, OnInit } from '@angular/core';
import services from '../services';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  ngOnInit(): void {
    services({ elementID: 'welcome' }).fadeOnScroll();
  }
}
