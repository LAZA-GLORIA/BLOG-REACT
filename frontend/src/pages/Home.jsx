import React, { useContext } from "react";
import BtnToggle from "../components/BtnToggle/BtnToggle";
import ThemeContext from "../context/ThemeContext";

function Home() {
  // UseContext va nous permettre d'utiliser le state depuis ThemeContext dans ce composant
  const { theme } = useContext(ThemeContext);
  console.warn(theme);
  return (
    <div>
      <BtnToggle />
      <h1> Lorem ipsum dolor sit amet consectetur </h1>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam
        minima assumenda nisi optio temporibus debitis magnam labore libero,
        commodi repellat, impedit quod delectus sed tempora soluta iusto
        repellendus dolores! adipisicing elit. Nostrum quam similique
        reprehenderit rem impedit doloribus quidem architecto sint mollitia
        optio beatae dolorum, commodi assumenda vero officiis eum pariatur
        repellat? Facilis?
      </p>
    </div>
  );
}

export default Home;
