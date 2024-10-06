import { useEffect, useState } from "react";
import { api } from "../shared/api.js";

export const useFetchedPhotos = (userId) => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      api
        .fetchAlbums(userId)
        .then((albums) => api.fetchPhotos(albums))
        .then((photos) => setPhotos(photos))
        .catch((error) => {
          console.log("error fetching data", error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [userId]);

  return { photos, isLoading };
};
