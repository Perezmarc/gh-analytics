import { Component, OnInit } from '@angular/core';
import { SearchRepoService } from '../services/search-repo.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  results: Object;
  searchTerm = new Subject<string>();

  constructor(private searchService: SearchRepoService) {
    this.searchService.search(this.searchTerm)
      .subscribe(results => {
        this.results = results;
        console.log('searching');
      });
  }

}
