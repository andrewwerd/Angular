import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSettingsComponent } from './manage-settings/manage-settings.component';
import { ProfileManagerComponent } from './profile-manager.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { SearchInputModule } from 'app/components/search-input/search-input.module';
import { SafeAvatarModule } from '@components';
import { EmailAsNameFormatPipeModule } from '@pipes';
import { TeamMembersListComponent } from './team-members-list/team-members-list.component';
import { TeamMemberCardComponent } from './team-members-list/team-member-card/team-member-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ManageSettingsComponent,
    ProfileManagerComponent,
    TeamMembersListComponent,
    TeamMemberCardComponent
  ],
  imports: [
    EmailAsNameFormatPipeModule,
    SafeAvatarModule,
    MatFormFieldModule,
    FontAwesomeModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    SearchInputModule,
    MatIconModule
  ],
  exports: [ProfileManagerComponent],
  providers: [],
})
export class ProfileManagerModule { }
