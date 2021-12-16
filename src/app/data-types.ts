import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

interface Props {
  elementID?: string,
  snackBar?: MatSnackBar,
  contactForm?: FormGroup,
  isDarkMode?: boolean,
  formGroupDirective?: FormGroupDirective,
  pageHeight?: number;
}

interface Services {
  fadeOnScroll(): void,
  getScrollPercentage(): number,
  isInViewport(): boolean,
  keepScrollPosition(): number,
  handleError(error: HttpErrorResponse): Observable<never>,
  handleSuccess(res: Object): Object
}

interface Project {
  id: string,
  title: string,
  link: string,
  subtitle: string,
  description: string,
  technologies: Array<string>,
  functionality: Array<string>,
  sampleImage: string,
  githubUrl?: string,
  appUrl?: string,
  caseStudy?: string
}

interface ContactData {
  name: string,
  company: string,
  email: string,
  phone: string,
  message: string,
}

export {
  Props, Services, Project, ContactData,
};
