import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditWorkplaceComponent } from './add-edit-workplace/add-edit-workplace.component';
import { FloorsComponent } from './floors.component';
import { DeskModule } from 'app/components/desk/desk.module';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FloorTileComponent } from './floors-grid/floor-tile/floor-tile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatGridListModule } from '@angular/material/grid-list'
import { FloorsGridComponent } from './floors-grid/floors-grid.component';
import { FloorsRoutingModule } from './floors-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FloorsAddComponent } from './floors-add/floors-add.component';

@NgModule({
  declarations: [
    AddEditWorkplaceComponent,
    FloorsComponent,
    FloorTileComponent,
    FloorsGridComponent,
    FloorsAddComponent
  ],
  imports: [
    DragDropModule,
    CommonModule,
    DeskModule,
    MatButtonModule,
    MatButtonToggleModule,
    FloorsRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FontAwesomeModule,
    MatGridListModule
  ],
  exports: [],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FloorsModule { }
