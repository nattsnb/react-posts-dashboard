import { useEffect, useState } from "react";
import { api } from "../shared/api.js";

const DisplayMode = {
  posts: "Browse posts:",
  photos: "Browse photos:",
};

const { fetchUsers, fetchPosts, fetchPhotos, fetchAlbums } = api;

export const useCommentsDashboard = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [displayMode, setDisplayMode] = useState(DisplayMode.posts);
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log("error fetching data", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const setNewActiveUser = (userId) => {
    setActiveUser(userId);
  };
  const switchDisplayModeToPhotos = () => {
    setDisplayMode(DisplayMode.photos);
  };
  const switchDisplayModeToPosts = () => {
    setDisplayMode(DisplayMode.posts);
  };
  return {
    users,
    isLoading,
    activeUser,
    displayMode,
    setNewActiveUser,
    switchDisplayModeToPhotos,
    switchDisplayModeToPosts,
  };
};
