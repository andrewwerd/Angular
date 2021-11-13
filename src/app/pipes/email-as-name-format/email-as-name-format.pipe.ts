import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'emailAsNameFormat' })
export class EmailAsNameFormatPipe implements PipeTransform {
  transform(email: string): string {
    if (!email || email.length < 1) { return ''; }

    const userName = email.split('@')[0];
    const allNames = userName.split(/[ ._-]/);
    const allNamesCapitalized = allNames.map(name => name.charAt(0).toUpperCase() + name.slice(1));
    const fullName = allNamesCapitalized.join(' ');
    return fullName;
  }
}
