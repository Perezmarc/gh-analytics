import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RepoListItemComponent } from '../repo-list-item/repo-list-item.component';

@NgModule({
  imports: [],
  declarations: [HomeComponent, RepoListItemComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
