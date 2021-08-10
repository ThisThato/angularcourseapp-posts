import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  addPosts(title: any, body: any) {
    if (!title || !body) {
      alert('Please add post')
    } else {
      this.postService.savePost({ title, body } as Post).subscribe(post => { console.log(post) })
    }
  }

}
