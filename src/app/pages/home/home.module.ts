import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeImageComponent } from './welcome-image/welcome-image.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeskModule } from 'app/components/desk/desk.module';
import { DeskTileComponent } from './desk-tile/desk-tile.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeImageComponent,
    DeskTileComponent
  ],
  imports: [
    DeskModule,
    FontAwesomeModule,
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }])
  ],
  exports: [],
  providers: [],
})
export class HomeModule { }
