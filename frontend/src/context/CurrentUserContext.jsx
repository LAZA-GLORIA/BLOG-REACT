/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from "react";
// React permet sans passer de props en props des informations : PROP DRILLING
// Context API va servir à englober notre app
// pour pouvoir lui forunir des données et pour pouvoir fournir ces données aux composants
// enfants
// Redux : utilise en interne l'Api de contexte et c'est un composant manager comme le context API
// Context: Thème, authentification, langues
// Redux: Grande application, bcp de states et de mises à jour ciblées avec bcp de boutons, des filtres
//
// Le composant parent doit contenir le provider
const CurrentUserContext = createContext(null);

export function CurrentUserContextProvider({ children }) {
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserAvatar, setCurrentUserAvatar] = useState("");

  return (
    <CurrentUserContext.Provider
      value={{
        currentUserName,
        setCurrentUserName,
        currentUserAvatar,
        setCurrentUserAvatar,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserContext;
