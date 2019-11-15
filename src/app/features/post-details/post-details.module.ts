import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailsRoutingModule } from './post-details-routing.module';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  declarations: [PostDetailsComponent],
  imports: [
    CommonModule,
    PostDetailsRoutingModule
  ]
})
export class PostDetailsModule { }
