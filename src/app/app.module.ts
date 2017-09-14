// ANGULAR IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeComponent } from './home/home.component';
// MODULES
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';
import { RepoDetailModule } from './repo-detail/repo-detail.module';
// SERVICES
import { SearchRepoService } from './_services/search-repo.service';
import { RepoService } from './_services/repo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    HeaderModule,
    HomeModule,
    RepoDetailModule
  ],
  providers: [SearchRepoService, RepoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
