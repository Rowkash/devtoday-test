import { Injectable } from "@nestjs/common";
import axios from "axios";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class AppService {
  async getPosts() {
    try {
      const res = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = res.data;

      const userPostCounts: { [key: number]: number } = {};

      for (const post of posts) {
        const userId = post.userId;
        if (userPostCounts[userId]) {
          userPostCounts[userId]++;
        } else {
          userPostCounts[userId] = 1;
        }
      }

      const postsWithCount = posts.map((post) => ({
        ...post,
        userPostsCount: userPostCounts[post.userId],
      }));

      return postsWithCount;
    } catch (error) {
      throw new Error("Error");
    }
  }
}
