import React, { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

export default function UserAvatar() {
  const { currentUserAvatar, currentUserName } = useContext(CurrentUserContext);

  return (
    <div className="avatar">
      <img
        src={
          currentUserAvatar ||
          "https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg"
        }
        alt={currentUserName}
      />
    </div>
  );
}
