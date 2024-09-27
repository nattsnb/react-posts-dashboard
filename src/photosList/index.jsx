import styles from "./photosList.module.css";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import { ListItemText, ListSubheader } from "@mui/material";
import ListItem from "@mui/material/ListItem";

const useFetchedPhotos = (userId) => {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then((response) => response.json())
        .then((albums) =>
          fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${albums[0].id}`,
          ),
        )
        .then((response) => response.json())
        .then((photos) => setPhotos(photos))
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
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotosList;
