"use client";

import { useQuery } from "@tanstack/react-query";
import { connector } from "../Connector/Connector";

const usePost = (id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: () => connector.getPost(id),
  });
  return { data, isLoading, isError };
};

export { usePost };
