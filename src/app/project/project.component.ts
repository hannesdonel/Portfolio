import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import projectList from './project-list';
import { Project } from '../data-types';

import { MoreMovieMetadataCaseStudyComponent } from '../case-studies/more-movie-metadata-case-study/more-movie-metadata-case-study.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  constructor(
    private app: AppComponent,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  public projects: Array<Project> = projectList;

  public descriptionOpenState?: string;

  public functionalityOpenState?: string;

  public wideScreen = true;

  ngOnInit(): void {
    this.setWideScreen();

    window.addEventListener('resize', this.setWideScreen);
  }

  setWideScreen = (): void => {
    const { innerWidth, innerHeight } = window;
    const ratio = innerHeight / innerWidth;

    if (ratio < 1) {
      this.wideScreen = true;
    } else {
      this.wideScreen = false;
    }
  };

  openCaseStudy = (project: string): void => {
    switch (project) {
      case 'more-movie-metadata':
        this.dialog.open(MoreMovieMetadataCaseStudyComponent, this.app.dialogConfig);
        break;
      default:
        this.snackBar.open('Sorry, there\'s no case study available for this project.', 'OK', { duration: 5000, panelClass: ['snack-bar', this.app.isDarkMode ? 'dark-theme' : 'hi'] });
    }
  };
}
