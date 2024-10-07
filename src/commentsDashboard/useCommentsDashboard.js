import { useEffect, useState } from "react";
import { api } from "../shared/api.js";

const DisplayMode = {
  posts: "Browse posts:",
  photos: "Browse photos:",
};

export const useCommentsDashboard = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [displayMode, setDisplayMode] = useState(DisplayMode.posts);
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUsersDetails() {
      setIsLoading(true);
      try {
        const usersResponse = await api.fetchUsers();
        setUsers(usersResponse);
      } catch (error) {}
      setIsLoading(false);
    }
    getUsersDetails();
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
