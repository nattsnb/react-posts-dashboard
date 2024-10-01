import PostsList from "../postsList/";
import { useCommentsDashboard } from "./useCommentsDashboard.js";
import { Button, ButtonGroup } from "@mui/material";
import PhotosList from "../photosList/index.jsx";

const DisplayMode = {
  posts: "Browse posts:",
  photos: "Browse photos:",
};

export const CommentsDashboard = () => {
  const {
    users,
    isLoading,
    activeUser,
    displayMode,
    setNewActiveUser,
    switchDisplayModeToPhotos,
    switchDisplayModeToPosts,
  } = useCommentsDashboard();

  return (
    <>
      <div>
        <Button
          variant={"contained"}
          color={displayMode === DisplayMode.posts ? "success" : ""}
          onClick={switchDisplayModeToPosts}
        >
          Posts
        </Button>
        <Button
          variant={"contained"}
          color={displayMode === DisplayMode.photos ? "success" : ""}
          onClick={switchDisplayModeToPhotos}
        >
          Photos
        </Button>
      </div>

      <h1>{displayMode}</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ButtonGroup>
            {users.map((user) => (
              <Button
                key={user.id}
                variant={activeUser === user.id ? "contained" : "outlined"}
                color={activeUser === user.id ? "success" : ""}
                onClick={() => setNewActiveUser(user.id)}
              >
                {user.username}
              </Button>
            ))}
          </ButtonGroup>
          {activeUser &&
            (displayMode === DisplayMode.posts ? (
              <PostsList activeUser={activeUser} />
            ) : (
              <PhotosList activeUser={activeUser} />
            ))}
        </div>
      )}
    </>
  );
};
