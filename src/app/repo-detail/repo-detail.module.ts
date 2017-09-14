import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { RepoDetailComponent } from './repo-detail.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [CommonModule, SharedModule, ChartsModule],
  declarations: [RepoDetailComponent],
  exports: [RepoDetailComponent]
})
export class RepoDetailModule { }
