import { Component, OnInit } from '@angular/core';
import {IApplicationState} from "../../../../store";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Post} from "../../../../models";
import {selectPosts} from '../../../../store';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {
  public posts: Observable<Post[]>;

  constructor(private readonly store: Store<IApplicationState>) { }

  ngOnInit() {
    this.posts = this.store.pipe(select(selectPosts));
  }

}
