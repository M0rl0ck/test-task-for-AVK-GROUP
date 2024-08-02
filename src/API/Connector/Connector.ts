import axios from "axios";
import type { IPost } from "../../types/IPost";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

class Connector {
  baseUrl: string;
  constructor(baseUrl: string = BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async getPosts() {
    const response = await axios.get<IPost[]>(this.baseUrl);
    return response.data;
  }

  async getPost(id: string) {
    const response = await axios.get<IPost>(`${this.baseUrl}/${id}`);
    return response.data;
  }
}

const connector = new Connector();

export { connector };
