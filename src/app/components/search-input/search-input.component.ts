import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent{

  @Input()
  control: FormControl | undefined;

  @Input()
  label: string | undefined;

  @Input()
  placeholder: string | undefined;
}
