import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IApplicationState, selectSelectedPost } from '../../../../store';
import { Post } from '../../../../models';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.less']
})
export class PostDetailsComponent implements OnInit {
  public selectedPost$: Observable<Post>;
  public message: any;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly store: Store<IApplicationState>
  ) { }

  ngOnInit() {
    this.selectedPost$ = this.store.pipe(select(selectSelectedPost));
    this.selectedPost$.subscribe((value: Post) => {
      if (value) {
        this.message = this.sanitizer.bypassSecurityTrustHtml(value.message);
      }
    });
  }

}
