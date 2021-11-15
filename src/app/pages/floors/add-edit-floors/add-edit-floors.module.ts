import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditFloorsComponent } from './add-edit-floors.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ResizableContainerModule } from 'app/components/resizable-container/resizable-container.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RoomContextMenuComponent } from './rooms/room-context-menu/room-context-menu.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { EditorToolbarComponent } from './editor-toolbar/editor-toolbar.component';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
  declarations: [
    AddEditFloorsComponent,
    EditorToolbarComponent,
    RoomsComponent,
    RoomContextMenuComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    ResizableContainerModule,
    MatDividerModule,
    DragDropModule,
    MatButtonToggleModule,
    FontAwesomeModule,
    MatButtonModule,
    RouterModule.forChild([{
      path: '',
      component: AddEditFloorsComponent
    }])
  ],
  exports: [AddEditFloorsComponent],
  providers: [],
})
export class AddEditFloorsModule { }
