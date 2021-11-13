import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  advanceIcon: string = '../assets/icons/advance-logo.svg'
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('advanceIcon', this.domSanitizer.bypassSecurityTrustResourceUrl(this.advanceIcon));
  }
  ngOnInit(): void {};
}
