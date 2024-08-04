import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Stack from "@mui/material/Stack";
import { IPost } from "@/types/IPost";
import Post from "../Post/Post";
import { Pagination, PaginationItem } from "@mui/material";

const RANGE = 20;
interface IPostsLists {
  posts: IPost[];
}

const PostsLists = ({ posts }: IPostsLists) => {
  const currentPage = useSearchParams().get("page");
  const [page, setPage] = useState(currentPage ? Number(currentPage) - 1 : 0);
  const [postsList, setPostsList] = useState(
    posts.slice(page * RANGE, page * RANGE + RANGE)
  );

  useEffect(() => {
    setPostsList(posts.slice(page * RANGE, page * RANGE + RANGE));
  }, [page, posts]);

  return (
    <Stack justifyContent="center" alignItems="center" spacing={4}>
      <Pagination
        count={Math.ceil(posts.length / RANGE)}
        page={page + 1}
        variant="outlined"
        color="primary"
        onChange={(_, value) => setPage(value - 1)}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            href={`/?page=${item.page ? item.page : 1}`}
            {...item}
          />
        )}
      />
      {postsList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Stack>
  );
};

export default PostsLists;
