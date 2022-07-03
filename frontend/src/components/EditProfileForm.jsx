import React, { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

export default function EditProfileForm() {
  const {
    currentUserName,
    setCurrentUserName,
    currentUserAvatar,
    setCurrentUserAvatar,
  } = useContext(CurrentUserContext);
  const handleNameInput = (e) => {
    setCurrentUserName(e.target.value);
  };
  const handleAvatarUrlInput = (e) => {
    setCurrentUserAvatar(e.target.value);
  };
  return (
    <form>
      <h2>Your informations</h2>
      <label htmlFor="name">
        Your name
        <input type="text" value={currentUserName} onChange={handleNameInput} />
      </label>
      <br />
      <label htmlFor="avatarurl">
        Your avatar URL :
        <input
          type="url"
          value={currentUserAvatar}
          onChange={handleAvatarUrlInput}
        />
      </label>
    </form>
  );
}
