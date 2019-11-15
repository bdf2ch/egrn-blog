import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { BlogOpenSideBar, IApplicationState } from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly store: Store<IApplicationState>) { }

  ngOnInit() {
  }

  /**
   * Открытие боковой панели
   */
  openSideBar() {
    this.store.dispatch(new BlogOpenSideBar());
  }

}
