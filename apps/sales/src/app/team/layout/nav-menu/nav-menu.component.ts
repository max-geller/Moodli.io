import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'team-nav-menu',
  templateUrl: './nav-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}