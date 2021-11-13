import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuItemModule, SafeAvatarModule } from '@components';
import { EmailAsNameFormatPipeModule } from '@pipes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    UserProfileComponent
  ],
  imports: [
    RouterModule,
    SafeAvatarModule,
    EmailAsNameFormatPipeModule,
    MenuItemModule,
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule { }
