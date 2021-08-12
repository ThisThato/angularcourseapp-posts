import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: "",
    body: ''
  };

  isEdit: boolean = false;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts)
      this.posts = posts
    })

  }

  // Add new post
  onNewPost(post: Post) {
    this.posts.unshift(post)
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  removePost(post: Post) {

  }

}
