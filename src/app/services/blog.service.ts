import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BlogResource } from '../resources/blog.resource';
import { IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private readonly resource: BlogResource) {}

  /**
   * Получение списка постов блога
   */
  loadListOfPosts(): Observable<{contents: IPost[], totalElements: number}> {
    return from(this.resource.getListOfPosts())
      .pipe(
        map((response: {contents: IPost[], totalElements: number}) => response)
      );
  }
}
