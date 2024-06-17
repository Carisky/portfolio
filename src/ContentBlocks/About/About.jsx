import React from "react";
import style from "./style.module.css";
import classNames from "classnames";
import Block from "../../Components/UI/Block/Block";

export default function About() {
  return (
    <Block mode={"dark"}>
      <div id="about" className={style.about_wrapper}>
        <div className={classNames(style.photo_container)}>
          <div className={classNames(style.photo)}></div>
          <div className={classNames(style.photo_shadow)}></div>
        </div>
        <div className={style.about_content}>
          <h2 className={style.about}>About <span className={style.me}>Me</span></h2>
          <div className={style.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            exercitationem iure dolorem illum commodi illo dolores eligendi
            sapiente nostrum cum, praesentium sunt atque alias excepturi nulla
          </div>
          <div className={style.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              commodi, eveniet assumenda aliquam libero debitis iure eligendi
          </div>
          <div className={classNames(style.contact_button)}>
            Contact Me
          </div>
        </div>
      </div>
    </Block>
  );
}
