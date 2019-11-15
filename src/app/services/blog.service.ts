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
  getListOfPosts(): Observable<{contents: IPost[], totalElements: number}> {
    return from(this.resource.getListOfPosts())
      .pipe(
        map((response: {contents: IPost[], totalElements: number}) => response)
      );
  }

  /**
   * Получение поста блога по URL
   * @param url - URL
   */
  getPostByUrl(url: string): Observable<IPost> {
    return from(this.resource.getPostByUrl(null, null, {url}))
      .pipe(
        map((response: IPost) => response)
      );
  }
}
