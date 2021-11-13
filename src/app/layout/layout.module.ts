import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { NgOnDestroy } from '@services';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './header/header.module';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ProfileManagerModule } from './profile-manager/profile-manager.module';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    HeaderModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule,
    CommonModule,
    NgScrollbarModule,
    LayoutRoutingModule,
    MatSelectModule,
    MatOptionModule,
    ProfileManagerModule
  ],
  declarations: [
    SideNavComponent,
    LayoutComponent
  ],
  exports: [
  ],
  providers: [
    NgOnDestroy
  ]
})
export class LayoutModule { }
