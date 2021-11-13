import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgOnDestroy } from '@services';
import { debounceTime, distinctUntilChanged, takeUntil, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrls: ['./team-members-list.component.scss'],
  providers: [NgOnDestroy]
})
export class TeamMembersListComponent implements OnInit {

  searchControl: FormControl = new FormControl('');
  searchIsActive: boolean = false;

  teamMembersList: { email: string }[] = [{email:'some.employee@email.com'}];
  employeeList: { email: string }[] = [];
  constructor(
    private onDestroy$: NgOnDestroy) { }

  ngOnInit(): void {
    console.log('teams')
    this.resetSearch();
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(value => Boolean(value)),
        tap(() => this.searchIsActive = true),
        takeUntil(this.onDestroy$))
      .subscribe(value => console.log(value))
  }

  resetSearch() {
    this.searchIsActive = false;
  }
}
