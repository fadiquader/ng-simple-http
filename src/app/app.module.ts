import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostsSearchComponent } from './posts/posts-search/posts-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'API_URL',
      useValue: 'https://jsonplaceholder.typicode.com',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
