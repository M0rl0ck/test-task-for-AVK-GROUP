"use client";

import { usePost } from "@/API/Hooks/usePost";
import DetailedPost from "@/components/DetailedPost/DetailedPost";

interface IPagePost {
  params: {
    postId: string;
  };
}
export default function PagePost({ params: { postId } }: IPagePost) {
  const { data, isLoading, isError } = usePost(postId);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data && <DetailedPost post={data} />}
    </div>
  );
}
