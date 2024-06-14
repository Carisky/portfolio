import React from "react";
import Block from "../../Components/UI/Block/Block";
import style from "./style.module.css";


const services = [
  {
    name: "Web Development",
    icon: "logo-react",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis",
  },
  {
    name: "Amazon Services",
    icon: "logo-amazon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis",
  },
  {
    name: "Docker",
    icon: "logo-docker",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis",
  },
];

export default function Service() {
  return (
    <Block
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      flex_dir={"column"}
    >
      <div className={style.service_wrapper}>
        <div className={style.description_block}>
          <h2 className={style.title}>
            My <span>Service</span>
          </h2>
          <div className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            ducimus eum necessitatibus reiciendis, esse, enim beatae ad vero
            aliquid dicta suscipit
          </div>
        </div>
        <div className={style.services_container}>
          {services.map((item, index) => {
            return (
              <div key={"service" + index} className={style.service}>
                <ion-icon name={item.icon}></ion-icon>
                <h2>{item.name}</h2>
                <div>{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Block>
  );
}
