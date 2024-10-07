import { useFetchedPhotos } from "./usePhotoList.js";

const PhotosList = ({ activeUser }) => {
  const { photos, isLoading } = useFetchedPhotos(activeUser);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
