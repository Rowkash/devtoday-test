import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller("posts")
export class AppController {
  constructor(private readonly appService: AppService) {}

  /** Task part 1.
   * Add endpoint GET '/posts':
   * 1. Get a list of posts from REST API (doc in the section below)
   * 2. Add to each post a value `userPostsCount`
   *    with the count of posts by the author of the post
   * 3. Return result
   * Expected Result:
     [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere ...",
        "body": "quia et ...",
        "userPostsCount": 10 // calculated field
      },
      ...
    ]
   * 
   * 4. The second part of the task in the file 'pacckages/web/src/App.tsx'
   * 
   * DOCUMENTATION OF REST API METHOD
   * Listing all posts
   * Method: GET
   * Url: 'https://jsonplaceholder.typicode.com/posts'
   * Response example:
      [
        {
          "id": 1,
          "userId": 1,
          "title": "sunt aut facere ...",
          "body": "quia et ...",
        },
        ...
      ]
  */
  @Get()
  async getAll() {
    return this.appService.getPosts();
  }
}
