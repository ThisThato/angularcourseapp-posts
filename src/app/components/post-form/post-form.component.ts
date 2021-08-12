import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  post: Post;

  //output sends out
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  //input receives
  @Input() isEdit: boolean;


  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  addPost(title: any, body: any) {
    if (!title || !body) {
      alert('Please add post')
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(post => { this.newPost.emit(post) })
    }
  }

  updatePost() {
    console.log("123")
  }

}
