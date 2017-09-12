import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { RepoDetailComponent } from './repo-detail.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [RepoDetailComponent],
  exports: [RepoDetailComponent]
})
export class RepoDetailModule { }
