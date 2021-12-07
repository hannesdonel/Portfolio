import { Component } from '@angular/core';
import projectList from './project-list';
import { Project } from '../data-types';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  public projects: Array<Project> = projectList;

  public descriptionOpenState?: string;

  public functionalityOpenState?: string;
}
