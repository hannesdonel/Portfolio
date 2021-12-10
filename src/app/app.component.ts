import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { RfxParallaxService } from 'rfx-parallax';
import { OverlayContainer } from '@angular/cdk/overlay';
import services from './services';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private bottomSheet: MatBottomSheet,
    private rfxParallaxService: RfxParallaxService,
    private dialog: MatDialog,
    private overlayContainer: OverlayContainer,
  ) { }

  public isDarkMode = true;

  public scrollPercentage = 0;

  public showSocialButton = true;

  config: MatBottomSheetConfig = {
    restoreFocus: true,
    closeOnNavigation: true,
    ariaLabel: 'Social media links bottom sheet',
  };

  dialogConfig: MatDialogConfig = {
    restoreFocus: true,
    closeOnNavigation: true,
  };

  ngOnInit(): void {
    document.addEventListener('scroll', (): void => {
      this.scrollPercentage = services({ elementID: 'responsive-container' }).getScrollPercentage();
    });
    this.rfxParallaxService.initListeners();
    this.checkStorageForDarkMode();
    this.toggleOverlayClass();
  }

  toggleOverlayClass = (): void => {
    if (this.isDarkMode) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    }
  };

  checkStorageForDarkMode = (): void => {
    const storageValue = localStorage.getItem('darkMode');
    if (storageValue === 'true' || storageValue === null) {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  };

  toggleDarkMode = (): void => {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.toggleOverlayClass();
  };

  openSocialLinks = (): void => {
    this.showSocialButton = false;
    this.bottomSheet.open(SocialLinksComponent, this.config)
      .afterDismissed().subscribe(() => { this.showSocialButton = true; });
    if (this.isDarkMode) {
      document.querySelectorAll('.social-link').forEach((link) => link.classList.add('invert-color'));
    }
  };

  openImprint(): void {
    this.showSocialButton = false;
    this.dialog.open(ImprintComponent, this.dialogConfig)
      .afterClosed().subscribe(() => { this.showSocialButton = true; });
  }

  openPrivacyNotice(): void {
    this.showSocialButton = false;
    this.dialog.open(PrivacyNoticeComponent, this.dialogConfig)
      .afterClosed().subscribe(() => { this.showSocialButton = true; });
  }

  scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
}