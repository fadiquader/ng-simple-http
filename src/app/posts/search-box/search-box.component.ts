import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchAll, tap} from 'rxjs/operators';
import {Post} from '../../models/post';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() search: EventEmitter<Post[]> = new EventEmitter<Post[]>();
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private el: ElementRef, private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts()
      .subscribe(
        (posts: any) => {
          this.search.emit(posts);
        }
      );
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value.trim()),
      // filter((val: string) => val.length > 1),
      debounceTime(250),
      distinctUntilChanged(),
      tap(() => this.loading.emit(true)),
      map((val: string) => this.postsService.getPosts(val)),
      switchAll(),
      tap(() => this.loading.emit(false)),
    ).subscribe(
      (posts: any) => {
        this.search.emit(posts);
      }
    )
  }
}
