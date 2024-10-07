import { useEffect, useState } from "react";
import { api } from "../shared/api.js";

export const useFetchedPosts = (userId) => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUsersPosts() {
      setIsLoading(true);
      try {
        const postsResponse = await api.fetchPosts(userId);
        setPosts(postsResponse);
      } catch (error) {}
      setIsLoading(false);
    }
    getUsersPosts();
  }, [userId]);

  return { posts, isLoading };
};
