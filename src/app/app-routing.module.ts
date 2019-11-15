import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PostNotFoundComponent } from './components/post-not-found/post-not-found.component';
import { PostDetailsGuard } from './guards/post-details.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './features/post-list/post-list.module#PostListModule'
  },
  {
    path: '404',
    component: PostNotFoundComponent
  },
  {
    path: '**',
    loadChildren: './features/post-details/post-details.module#PostDetailsModule',
    canActivate: [
      PostDetailsGuard
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
