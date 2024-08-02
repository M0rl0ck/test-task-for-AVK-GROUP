"use client";
import { usePosts } from "@/API/Hooks/usePosts";

export default function Home() {
  const { data, isLoading, isError } = usePosts();
  return (
    <>
      <h1>Hello</h1>
      {data?.length && data.map((post) => <p key={post.id}>{post.title}</p>)}

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
    </>
  );
}
