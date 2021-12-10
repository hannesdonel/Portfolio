import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Props, Services } from './data-types';

const services = (props: Props): Services => {
  const {
    elementID, snackBar, contactForm, isDarkMode, formGroupDirective,
  } = props;

  // Scroll services

  const fadeOnScroll = (): void => {
    window.addEventListener('scroll', (): void => {
      const element = document.getElementById(elementID!)!;
      const elementInfo = element!.getBoundingClientRect();
      const rectangleHeight = elementInfo.height;
      const rectangleTop = window.scrollY;
      const opacityPercent = ((rectangleTop * -1 - rectangleHeight) / rectangleHeight) + 2;

      element.style.opacity = opacityPercent.toString();
    });
  };

  const getScrollPercentage = (): number => {
    const element = document.getElementById(elementID!)!;
    const elementInfo = element!.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const rectangleHeight = elementInfo.height - windowHeight * 2;
    const rectangleTop = elementInfo.top + windowHeight;

    return rectangleTop > 0
      ? 0
      : Math.abs(rectangleTop) / (rectangleHeight / 100);
  };

  const isInViewport = (): boolean => {
    const element = document.getElementById(elementID!)!;
    const rect = element.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight / 3)
      && rect.bottom > (window.innerHeight / 3)
    );
  };

  // Response handler

  const handleError = (error: HttpErrorResponse): Observable<never> => {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    snackBar!.open(
      `Sorry ${contactForm!.value.name}, something bad happened.`,
      'OK',
      { panelClass: ['snack-bar', isDarkMode ? 'dark-theme' : 'hi'] },
    );
    return throwError(error.error);
  };

  const handleSuccess = (res: Object): Object => {
    snackBar!.open(
      `Thank you ${contactForm!.value.name}, your message has successfully been sent.`,
      'Nice',
      { duration: 5000, panelClass: ['snack-bar', isDarkMode ? 'dark-theme' : 'hi'] },
    );
    formGroupDirective!.resetForm();
    return res || {};
  };

  return {
    fadeOnScroll,
    getScrollPercentage,
    isInViewport,
    handleError,
    handleSuccess,
  };
};

export default services;
