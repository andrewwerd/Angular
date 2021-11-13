import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewBookingComponent } from './review-booking.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReviewBookingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ReviewBookingComponent
    }])],
  exports: [
  ],
  providers: [],
})
export class ReviewBookingModule { }
