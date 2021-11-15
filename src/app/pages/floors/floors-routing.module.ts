import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FloorsComponent } from './floors.component';
import { FloorsGridComponent } from './floors-grid/floors-grid.component';
import { AddEditFloorsComponent } from './add-edit-floors/add-edit-floors.component';

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
        loadChildren: () => import('./add-edit-floors/add-edit-floors.module').then(m => m.AddEditFloorsModule)
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
