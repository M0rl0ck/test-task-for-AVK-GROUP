import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Stack from "@mui/material/Stack";
import { IPost } from "@/types/IPost";
import Post from "../Post/Post";
import { Pagination, PaginationItem } from "@mui/material";

const RANGE = 20;
interface IPostsLists {
  posts: IPost[];
}

const PostsLists = ({ posts }: IPostsLists) => {
  const router = useRouter();
  const searchPage = useSearchParams().get("page");
  let currentPage = 0;
  if (searchPage && +searchPage > 0 && +searchPage <= posts.length / RANGE) {
    currentPage = +searchPage - 1;
  } else {
    currentPage = 0;
  }
  searchPage && +searchPage <= posts.length / RANGE ? +searchPage - 1 : 0;
  const [page, setPage] = useState(currentPage);
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
