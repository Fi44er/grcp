import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { HelloWorldResponse, PostsServiceClient, Post, Posts } from 'proto/schema';
import { Client, ClientGrpc } from '@nestjs/microservices';
import * as protoc from '../../../proto/schema';
import { join } from 'path';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'posts',
      protoPath: join(__dirname, '../schema.proto'),
    },
  })
  private client: ClientGrpc;

  private postsService: PostsServiceClient;

  onModuleInit() {
    this.postsService = this.client.getService<PostsServiceClient>('PostsService');
  }

  getAllPosts(): Observable<Posts> {
    return this.postsService.getAllPosts({});
  }

  getPost(id: number): Observable<Post> {
    return this.postsService.getPost({ id });
  }

  createPost(title: string, content: string): Observable<Post> {
    return this.postsService.createPost({ title, content });
  }

  updatePost(id: number, title?: string, content?: string): Observable<Post> {
    return this.postsService.updatePost({ id, title, content });
  }

  deletePost(id: number): Observable<Post> {
    return this.postsService.deletePost({ id });
  }

  helloWorld(): Observable<HelloWorldResponse> {
    return this.postsService.helloWorld({ message: 'hello' });
  }
}


