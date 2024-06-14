import React from "react";
import style from "./style.module.css";

const app_map = [
  { name: "Home", anchor: "" },
  { name: "About", anchor: "" },
  { name: "Service", anchor: "" },
  { name: "Portfolio", anchor: "" },
  { name: "Resume", anchor: "" },
  { name: "Contact", anchor: "" },
];

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        {app_map.map((element, index) => {
          return (
            <div className={style.nav_item} key={"head" + index}>
              {element.name}
            </div>
          );
        })}
      </nav>
    </header>
  );
}
