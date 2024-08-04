"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { connector } from "../Connector/Connector";
import { IPost } from "@/types/IPost";

const useCreatePost = () => {
  const queryClient = useQueryClient();
  const { mutate, data, isError } = useMutation({
    mutationKey: ["add post"],
    mutationFn: (body: Omit<IPost, "id">) => connector.createPost(body),
    onSuccess: (data) => {
      queryClient.setQueryData(["post", String(data?.id)], data);
      queryClient.setQueryData(["posts"], (old: IPost[] | undefined) => [
        ...(old || []),
        data,
      ]);
    },
  });
  return { mutate };
};

export { useCreatePost };
