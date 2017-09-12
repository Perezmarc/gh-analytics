import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RepoListItemComponent } from './repo-list-item/repo-list-item.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeComponent, RepoListItemComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
