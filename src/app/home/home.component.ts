import { Component, OnInit } from '@angular/core';
import { SearchRepoService } from '../_services/search-repo.service';
import { Subject } from 'rxjs/Subject';
import { fadeInAnimation } from '../_animations/fade-in.animation';
import { flyInOutAnimation } from '../_animations/fly-in-out.animation';
import { trigger, state, animate, AnimationEntryMetadata, transition, style, keyframes } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ flyInOutAnimation, fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent {
  repos: Object;
  searchTerm = new Subject<string>();

  constructor(private searchRepoService: SearchRepoService) {
    this.searchRepoService.search(this.searchTerm)
      .map(results => results.json().items)
      .subscribe(results => {
        this.repos = results;
      });
  }
}
