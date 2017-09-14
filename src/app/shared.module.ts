import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './_pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [TruncatePipe],
  exports: [CommonModule, TruncatePipe, RouterModule]
})
export class SharedModule { }
