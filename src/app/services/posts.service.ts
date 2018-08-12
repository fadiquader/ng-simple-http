import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Post} from '../models/post';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    @Inject('API_URL') private apiURL: string,
    private http: HttpClient,
  ) { }

  getPosts(search?): Observable<Post[]> {
    const optns = {};
    if(search) {
      optns['params'] = new HttpParams().set('title', search)
    }
    return this.http.get(`${this.apiURL}/posts`, optns).pipe(
      map((data: any) => {
        return data.map(post => new Post(post));
      }),
      catchError(err => of('error happened')),
    );
  }
}
