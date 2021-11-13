import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FloorsComponent } from './floors.component';
import { FloorsGridComponent } from './floors-grid/floors-grid.component';
import { FloorsAddComponent } from './floors-add/floors-add.component';

const routes: Routes = [
  {
    path: '',
    component: FloorsComponent,
    children: [
      {
        path: '',
        redirectTo: 'grid',
        pathMatch: 'full'
      },
      {
        path: 'grid',
        component: FloorsGridComponent
      },
      {
        path: 'add',
        component: FloorsAddComponent
      },
      // {
      //   path: ':id',
      //   component: EmployeeProfileTabsComponent,
      // }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FloorsRoutingModule { }
