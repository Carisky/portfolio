import React from "react";
import style from "./style.module.css";

const app_map = [
  { name: "Home", anchor: "#home" },
  { name: "About", anchor: "#about" },
  { name: "Service", anchor: "#service" },
  { name: "Minigame", anchor: "#minigame" },
  { name: "Resume", anchor: "#resume" },
  { name: "Contact", anchor: "#contact" },
];

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        {app_map.map((element, index) => {
          return (
            <a
              className={style.nav_item}
              href={element.anchor}
              key={"head" + index}
            >
              {element.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
