import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { SearchRepoService } from './services/search-repo.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    HttpModule
  ],
  providers: [SearchRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
