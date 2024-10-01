import { useEffect, useState } from "react";
import { api } from "../shared/api.js";

const { fetchUsers, fetchPosts, fetchPhotos, fetchAlbums } = api;

export const useFetchedPhotos = (userId) => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      fetchAlbums(userId)
        .then((albums) => fetchPhotos(albums))
        .then((photos) => setPhotos(photos))
        .catch((error) => {
          console.log("error fetching data", error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [userId]);

  return { photos, isLoading };
};
