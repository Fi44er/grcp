import { Controller, Get, Param } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreatePostDto, Empty, FindOnePostDto, HelloWorldResponse, Post, Posts, PostsServiceController, UpdatePostDto } from "../../../proto/schema";
import { Observable } from 'rxjs';
import { GrpcMethod } from '@nestjs/microservices';
@Controller('posts')
export class PostsController implements PostsServiceController {
  constructor(private readonly postsService: ClientService) { }

    getAllPosts(request: Empty): Posts | Observable<Posts> | Promise<Posts> {
        throw new Error('Method not implemented.');
    }
    getPost(request: FindOnePostDto): Post | Observable<Post> | Promise<Post> {
        throw new Error('Method not implemented.');
    }
    createPost(request: CreatePostDto): Post | Observable<Post> | Promise<Post> {
        throw new Error('Method not implemented.');
    }
    updatePost(request: UpdatePostDto): Post | Observable<Post> | Promise<Post> {
        throw new Error('Method not implemented.');
    }
    deletePost(request: FindOnePostDto): Post | Observable<Post> | Promise<Post> {
        throw new Error('Method not implemented.');
    }

    @GrpcMethod('PostsService', 'helloWorld')
    @Get("hello")
    helloWorld(@Param('message') message: HelloWorldResponse): Promise<HelloWorldResponse> {
        return this.postsService.helloWorld(message).toPromise();
    }
  
  
}