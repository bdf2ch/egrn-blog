import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogResource } from './resources/blog.resource';
import { BlogEffects, BlogReducer } from './store';
import { HeaderComponent } from './components/header/header.component';
import { PostNotFoundComponent } from './components/post-not-found/post-not-found.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ResourceModule.forRoot(),
    StoreModule.forRoot({blog: BlogReducer}),
    EffectsModule.forRoot([BlogEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule
  ],
  providers: [
    BlogResource
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
