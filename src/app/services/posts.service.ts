import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../models/Post';


const HttpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post)
  }
}
