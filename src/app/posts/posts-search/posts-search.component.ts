import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {PostsService} from '../../posts.service';
import {Post} from '../../post';

@Component({
  selector: 'app-posts-search',
  templateUrl: './posts-search.component.html',
  styleUrls: ['./posts-search.component.css']
})
export class PostsSearchComponent implements OnInit {
  @Output() search: EventEmitter<Post[]> = new EventEmitter<Post[]>();
  constructor(
    private el: ElementRef,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.getPosts()
      .subscribe(
        (posts: Post[]) => {
          this.search.emit(posts);
        }
      )
  }
}
