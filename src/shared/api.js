function fetchAlbums(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  ).then((response) => response.json());
}

function fetchPhotos(albumsId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumsId[0].id}`,
  ).then((response) => response.json());
}

function fetchPosts(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  ).then((response) => response.json());
}

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json(),
  );
}

export const api = {
  fetchUsers,
  fetchPosts,
  fetchPhotos,
  fetchAlbums,
};
