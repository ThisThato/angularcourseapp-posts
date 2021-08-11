import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  post: Post;

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  addPosts(title: any, body: any) {
    if (!title || !body) {
      alert('Please add post')
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(post => { this.newPost.emit(post) })
    }
  }

}
