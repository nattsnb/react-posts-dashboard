import styles from "./photosList.module.css";
import { useEffect, useState } from "react";

const useFetchedPhotos = (userId) => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then((response) => response.json())
        .then((albums) =>
          fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${albums[0].id}`,
          ),
        )
        .then((response) => response.json())
        .then((photos) => console.log(photos))
        .catch((error) => {
          console.log("error fetching data", error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [userId]);

  return { photos, isLoading };
};
const PhotosList = ({ activeUser }) => {
  const { photos, isLoading } = useFetchedPhotos(activeUser);
  return <div></div>;
};

export default PhotosList;
