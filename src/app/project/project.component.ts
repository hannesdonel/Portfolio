import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects = [
    {
      name: 'More Movie Metadata',
      description: 'Test, hallo blablablablababl, das ist doch was wir wollen.',
    },
    {
      name: 'More Movie Metadata - Angular Client',
      description: 'Test, hallo blablablablababl, das ist doch was wir wollen.',
    },
    {
      name: 'More Movie Metadata - React Client',
      description: 'Test, hallo blablablablababl, das ist doch was wir wollen.',
    },
    {
      name: 'Meet',
      description: 'Test, hallo blablablablababl, das ist doch was wir wollen.',
    },
    {
      name: 'Simple Chat',
      description: 'Test, hallo blablablablababl, das ist doch was wir wollen.',
    },
    {
      name: 'Pokédex',
      description: 'Test, hallo blablablablababl, das ist doch was wir wollen.',
    },
  ];
}
