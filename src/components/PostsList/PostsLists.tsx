import React from "react";
import Stack from "@mui/material/Stack";
import { IPost } from "@/types/IPost";
import Divider from "@mui/material/Divider/Divider";
import Post from "../Post/Post";

interface IPostsLists {
  posts: IPost[];
}

const PostsLists = ({ posts }: IPostsLists) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={4}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Stack>
  );
};

export default PostsLists;
