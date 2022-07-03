import React, { createContext, useState } from "react";
import "./ThemeContext.css";

// J'initialise mon context
const ThemeContext = createContext();

// Et je vais crée mon composant avec du state à l'intérieur
// Et ce sera le state que je vais partager dans toute l'application

// ThemeContextProvider celui qui apporte
// J'utilise props ou children
// Mes données ce sont mes props qui sont ici mon theme
// on a besoin de children pour afficher tous les enfants qui sont englobés

// ThemeContextProvider est le composant qui retourne le Provider (qui va servir l'appli en données)
// qui provient du context ThemeContext
export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(false);

  // On peut passer des données (state)
  // Mais aussi des fonctions comme ici ToggleTheme

  const toggleTheme = () => {
    setTheme(!theme);
  };

  if (theme) {
    document.body.classList.add("dark-body");
  } else {
    document.body.classList.remove("dark-body");
  }

  return (
    // .Provider vient de notre création de context
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
