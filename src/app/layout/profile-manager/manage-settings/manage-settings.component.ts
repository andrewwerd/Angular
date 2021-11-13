import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StringUtils } from '@utils';
import { PrivacySetting } from '@models';

@Component({
  selector: 'app-manage-settings',
  templateUrl: './manage-settings.component.html',
  styleUrls: ['./manage-settings.component.scss']
})
export class ManageSettingsComponent implements OnInit {
  @Output()
  closeSettings = new EventEmitter<boolean>();

  privacySettings: PrivacySetting[] = [
    {
      description: 'Who can see me',
      values: ['none', 'team members', 'all']
    },
    {
      description: 'Who can send me a request to join the team',
      values: ['none', 'all']
    },
    {
      description: 'Show your colleagues on the floor plan',
      values: ['none', 'team members', 'all']
    }
  ];

  towers: string[] = ['Chisinau', 'Timisoara'];

  constructor() { }

  ngOnInit(): void { console.log('settings') }

  getPrivacySettingValues(setting: PrivacySetting): string[] {
    return setting.values.map(value => StringUtils.capitalize(value));
  }
}
