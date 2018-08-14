import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  closeResult: string;
  selectedPost: Post;
  constructor(private postsService: PostsService, private modalService: NgbModal) { }

  ngOnInit() {
    // this.getPosts();
  }
  deletePost(post: Post, index: number) {
    this.postsService.deletePost(post.id)
      .subscribe(
        () => {
          this.posts.splice(index, 1);
        }
      )
  }
  open(content, post: Post) {
    this.selectedPost = Object.assign(new Post(post), Post);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).
    result.then((result) => {
      if(result === 'update') {
        this.updatePost(this.selectedPost);
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult =  reason;
    });
  }

  private updatePost(post) {
    this.postsService.updatePost(post)
      .subscribe(
        () => {
          const index = this.posts.findIndex(item => item.id === post.id);
          this.posts[index] = Object.assign(new Post(post), Post);
        }
      )
  }

}
