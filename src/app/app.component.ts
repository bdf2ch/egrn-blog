import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import { BlogCloseSideBar, IApplicationState, selectSideBarOpened } from './store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public isSideBarOpened$: Observable<boolean>;

  constructor(private readonly store: Store<IApplicationState>) {}

  ngOnInit(): void {
    this.isSideBarOpened$ = this.store.pipe(select(selectSideBarOpened));
  }

  /**
   * Закрытие боковой панели
   */
  closeSideBar() {
    this.store.dispatch(new BlogCloseSideBar());
  }
}
