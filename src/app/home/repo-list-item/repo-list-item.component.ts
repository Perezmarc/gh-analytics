import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo-list-item',
  templateUrl: './repo-list-item.component.html',
  styleUrls: ['./repo-list-item.component.scss']
})
export class RepoListItemComponent implements OnInit {
  @Input() repo;
  constructor() { }

  ngOnInit() {
  }

}
