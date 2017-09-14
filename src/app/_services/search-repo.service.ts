import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment as env} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';

@Injectable()
export class SearchRepoService {
  constructor(private http: Http) { }

  search(terms: Observable<string>) {
      return terms
        .filter(term => term !== '')
        .debounceTime(400) //returns only the values that come 400ms after the last one returned
        .distinctUntilChanged() //returns the value if it is different than the previous one
        .switchMap(term => {
          if(term){
            return this.searchEntries(term)
          }else{
            return Observable.of({})
          }
        });
  }

  searchEntries(term) {
    return this.http
        .get(`${env.api}/search/repos/?q=${term}`);
  }

}
