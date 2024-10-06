import { useEffect, useState } from "react";
import { api } from "../shared/api.js";

export const useFetchedPosts = (userId) => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      api
        .fetchPosts(userId)
        .then((data) => setPosts(data))
        .catch((error) => {
          console.log("error fetching data", error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [userId]);
  return { posts, isLoading };
};
