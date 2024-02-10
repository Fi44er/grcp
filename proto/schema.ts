/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "posts";

export interface Empty {
}

export interface FindOnePostDto {
  id: number;
}

export interface HelloWorldResponse {
  message: string;
}

export interface CreatePostDto {
  title: string;
  content: string;
}

export interface UpdatePostDto {
  id: number;
  title?: string | undefined;
  content?: string | undefined;
}

export interface Posts {
  Posts: Post[];
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

export const POSTS_PACKAGE_NAME = "posts";

export interface PostsServiceClient {
  getAllPosts(request: Empty): Observable<Posts>;

  getPost(request: FindOnePostDto): Observable<Post>;

  createPost(request: CreatePostDto): Observable<Post>;

  updatePost(request: UpdatePostDto): Observable<Post>;

  deletePost(request: FindOnePostDto): Observable<Post>;

  helloWorld(request: HelloWorldResponse): Observable<HelloWorldResponse>;
}

export interface PostsServiceController {
  getAllPosts(request: Empty): Promise<Posts> | Observable<Posts> | Posts;

  getPost(request: FindOnePostDto): Promise<Post> | Observable<Post> | Post;

  createPost(request: CreatePostDto): Promise<Post> | Observable<Post> | Post;

  updatePost(request: UpdatePostDto): Promise<Post> | Observable<Post> | Post;

  deletePost(request: FindOnePostDto): Promise<Post> | Observable<Post> | Post;

  helloWorld(
    request: HelloWorldResponse,
  ): Promise<HelloWorldResponse> | Observable<HelloWorldResponse> | HelloWorldResponse;
}

export function PostsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getAllPosts", "getPost", "createPost", "updatePost", "deletePost", "helloWorld"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PostsService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PostsService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const POSTS_SERVICE_NAME = "PostsService";
