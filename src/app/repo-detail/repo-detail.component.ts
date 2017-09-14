import { Component, OnInit, Input } from '@angular/core';
import { RepoService } from '../_services/repo.service';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../_animations/fade-in.animation';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class RepoDetailComponent implements OnInit {
  @Input() repo;
  contributors = {
    'results': [],
    'next': '',
    'last': ''
  };
  commits = {
    'values': [],
    'keys': []
  }

  public lineChartOptions:any = {
    responsive: true,
    legend: {
            display: false
         }
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  constructor( private repoService: RepoService, private route: ActivatedRoute) { }
  ngOnInit() {
    if(!this.repo){
      this.route.params.subscribe(params => {
        this.repoService.getRepoInfo(params['owner'], params['reponame']).subscribe(
          results => {
            this.repo = results;
          }
        );
        this.repoService.getRepoContributors(params['owner'], params['reponame']).subscribe(
          response => {
            this.contributors = response;
            console.log(this.contributors);
          }
        );
        this.repoService.getRepoCommitsTimeline(params['owner'], params['reponame']).subscribe(
          response => {
            this.commits.values.push({'data': Object.values(response.results.commitsTL)});
            this.commits.keys = Object.keys(response.results.commitsTL);
            console.log(this.commits);
          }
        );
      });
    }
  }

  getNextContributors(){
    this.repoService.getNext(this.contributors.next).subscribe(
      response => {
        this.contributors.results = [...this.contributors.results, ...response.results];
        this.contributors.next = response.next;
        this.contributors.last = response.last;
      }
    );
  }
  }
