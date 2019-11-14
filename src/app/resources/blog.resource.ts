import {Injectable} from '@angular/core';

import {
  IResourceMethod,
  IResourceMethodStrict,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceRequestMethod
} from '@ngx-resource/core';

import {environment} from '../../environments/environment';
import {IPost} from '../interfaces';
import {Post} from '../models';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: environment.apiUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})
export class BlogResource extends Resource {

  constructor(handler: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    path: '/',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  getListOfPosts: IResourceMethodStrict<void, void, void, {contents: IPost[], totalElements: number}>;

  @ResourceAction({
    path: '/{!url}',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  getPostByUrl: IResourceMethodStrict<void, void, {url: string}, IPost>;

  @ResourceAction({
    path: '/{!url}',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  getPostById: IResourceMethodStrict<void, void, {id: string}, IPost>;
}
