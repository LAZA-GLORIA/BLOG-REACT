import React, { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

export default function Footer() {
  const { currentUserName } = useContext(CurrentUserContext);
  return <footer>Glad to see you back {currentUserName}</footer>;
}
