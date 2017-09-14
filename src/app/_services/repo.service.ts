import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment as env} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import _ from 'lodash';

@Injectable()
export class RepoService {
  constructor(private http: Http) { }
  getRepoInfo(owner: string, reponame: string) : Observable<any> {
    const headers      = new Headers({ 'Content-Type': 'application/json' });
    const options      = new RequestOptions({ headers: headers });
    return this.http
      .get(`${env.api}/repos/${owner}/${reponame}/`, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  getRepoContributors(owner: string, reponame: string) : Observable<any> {
    const headers      = new Headers({ 'Content-Type': 'application/json' });
    const options      = new RequestOptions({ headers: headers });
    return this.http
      .get(`${env.api}/repos/${owner}/${reponame}/contributors/`, options)
      .map((res:Response) => {
          const linksParsed = parse_link_header(res.headers.get('link'));
          return {'results': res.json(), 'next': linksParsed['next'], 'last': linksParsed['last']}
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  getRepoCommitsTimeline(owner: string, reponame: string) : Observable<any> {
    const headers      = new Headers({ 'Content-Type': 'application/json' });
    const options      = new RequestOptions({ headers: headers });
    return this.http
      .get(`${env.api}/repos/${owner}/${reponame}/commits/`, options)
      .map((res:Response) => {
          return {'results': res.json(), 'next': '', 'last': ''}
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  getNext(url: string) : Observable<any> {
    const headers      = new Headers({ 'Content-Type': 'application/json' });
    const options      = new RequestOptions({ headers: headers });
    return this.http
      .get(url, options)
      .map((res:Response) => {
          const linksParsed = parse_link_header(res.headers.get('link'));
          return {'results': res.json(), 'next': linksParsed['next'], 'last': linksParsed['last']}
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}


function parse_link_header(header) {
  if( header !== 'undefined' ){
    console.log(header);
    if (header.length == 0) {
      throw new Error("input must not be of zero length");
    }
    // Split parts by comma
    const parts = header.toString().split(',');
    let links = {};
    // Parse each part into a named link
    _.each(parts, function(p) {
      const section = p.split(';');
      if (section.length != 2) {
        throw new Error("section could not be split on ';'");
      }
      const url = section[0].replace(/<(.*)>/, '$1').trim();
      const name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });
    return links;
  }
  return {'next': '', 'last': ''}
}
