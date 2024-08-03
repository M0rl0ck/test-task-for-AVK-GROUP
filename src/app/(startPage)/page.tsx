"use client";
import { usePosts } from "@/API/Hooks/usePosts";
import PostsLists from "@/components/PostsList/PostsLists";

export default function Home() {
  const { data, isLoading, isError } = usePosts();
  return (
    <>
      {data?.length && <PostsLists posts={data} />}

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
    </>
  );
}
