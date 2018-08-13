import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    @Inject('API_URL') private apiURL: string,
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get(`${this.apiURL}/posts`).pipe(
      map((values: any[]) => {
        return values.map(obj => new Post(obj))
      })
    )
  }
}
