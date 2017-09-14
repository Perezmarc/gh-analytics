import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { slideInOutAnimation } from '../../_animations/slide-in-out.animation';
import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

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
