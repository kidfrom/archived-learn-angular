import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../components/user.component';
import {map} from 'rxjs/operators';

@Injectable()
export class PostsService {
  constructor(private httpClient: HttpClient) {
    console.log('PostsService Initialized...')
  }

  getPosts() {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(response => response.filter(item => item.id === 1))
      )
  }
}