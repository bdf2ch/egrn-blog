import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './components/post-list/post-list.component';
import { PostListGuard } from '../../guards/post-list.guard';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    resolve: [
      PostListGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostListRoutingModule { }
