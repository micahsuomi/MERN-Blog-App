import { useState, useEffect } from "react";

export default function useStyles(post) {
  let [colorStyles, setColorStyles] = useState({});
  let [iconStyles, setIconStyles] = useState("");

  useEffect(() => {
    setStyles();
  }, []);

  const setStyles = () => {
    if (post.category.toLowerCase().includes("work")) {
      setColorStyles({ backgroundColor: "var(--blue)" });
      setIconStyles("fas fa-network-wired");
    } else if (post.category.toLowerCase().includes("entertainment")) {
      setColorStyles({ backgroundColor: "var(--secondary)" });
      setIconStyles("fas fa-hamburger");
    } else if (post.category.toLowerCase().includes("culture")) {
      setColorStyles({ backgroundColor: "var(--purple)" });
      setIconStyles("fas fa-palette");
    } else if (post.category.toLowerCase().includes("travel")) {
      setColorStyles({ backgroundColor: "var(--green)" });
      setIconStyles("fas fa-mountain");
    } else if (post.category.toLowerCase().includes("sport")) {
      setColorStyles({ backgroundColor: "var(--violet)" });
      setIconStyles("fas fa-football-ball");
    } else {
      setColorStyles({ backgroundColor: "var(--yellow)" });
      setIconStyles("fas fa-hourglass-start");
    }
  };

  return [colorStyles, iconStyles];
}
