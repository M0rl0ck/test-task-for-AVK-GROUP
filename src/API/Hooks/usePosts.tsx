"use client";
import { useQuery } from "@tanstack/react-query";
import { connector } from "../Connector/Connector";

const usePosts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => connector.getPosts(),
  });
  return { data, isLoading, isError };
};

export { usePosts };
