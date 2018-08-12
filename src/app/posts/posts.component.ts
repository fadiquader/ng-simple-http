import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  loading: boolean;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // this.getPosts();
  }

}
