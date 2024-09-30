import { useEffect, useState } from "react";

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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
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
