import { useEffect, useState } from "react";
import { api } from "../shared/api.js";

export const useFetchedPhotos = (userId) => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUsersPhotos() {
      setIsLoading(true);
      try {
        const albumResponse = await api.fetchAlbums(userId);
        const photosResponse = await api.fetchPhotos(albumResponse);
        setPhotos(photosResponse);
      } catch (error) {}
      setIsLoading(false);
    }
    getUsersPhotos();
  }, [userId]);

  return { photos, isLoading };
};
