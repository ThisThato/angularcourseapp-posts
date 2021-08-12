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



  onUpdatedPost(post: Post) {
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: "",
          body: ''
        }
      }
    })
  }

  removePost(post: Post) {
    if (confirm("Are you sure?")) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) => {
          if (post.id === cur.id) {
            this.posts.splice(index, 1);

          }
        })
      })
    }
  }

}
