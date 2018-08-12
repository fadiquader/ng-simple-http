import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchBoxComponent } from './posts/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'API_URL',
      useValue: 'https://jsonplaceholder.typicode.com'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
