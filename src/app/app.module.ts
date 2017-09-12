import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { SearchRepoService } from './services/search-repo.service';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared.module';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { RepoDetailModule } from './repo-detail/repo-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    SharedModule,
    HeaderModule,
    HomeModule,
    RepoDetailModule
  ],
  providers: [SearchRepoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
