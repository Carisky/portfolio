import React, { useRef } from "react";
import { useSpring, animated, useSpringRef, useChain } from "@react-spring/web";
import Block from "../../Components/UI/Block/Block";
import style from "./style.module.css";
import classNames from 'classnames';

export default function Home() {
  // Define references for the animations
  const firstRef = useSpringRef();
  const secondRef = useSpringRef();
  const thirdRef = useSpringRef();
  const fourthRef = useSpringRef();

  // Define the animations for each item
  const firstSpring = useSpring({
    ref: firstRef,
    from: { opacity: 0, transform: "translate3d(0,-50px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  const secondSpring = useSpring({
    ref: secondRef,
    from: { opacity: 0, transform: "translate3d(0,-50px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  const thirdSpring = useSpring({
    ref: thirdRef,
    from: { opacity: 0, transform: "translate3d(0,-50px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  const fourthSpring = useSpring({
    ref: fourthRef,
    from: { opacity: 0, transform: "translate3d(0,-50px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
  });

  useChain([firstRef, secondRef, thirdRef, fourthRef], [0, 0.3, 0.6, 0.9]);

  return (
    <Block>
      <div className={style.home_wrapper}>
        <div className={style.stack}>
          <animated.div className={classNames(style.item, style.greeting)} style={firstSpring}>
            Hello, Welcome!
          </animated.div>
          <animated.h2 className={classNames(style.item, style.fio)} style={secondSpring}>
            I m Yehor Korsun
          </animated.h2>
          <animated.div className={classNames(style.item, style.description)} style={thirdSpring}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            iste fugiat at laborum ab. Fuga autem provident expedita tempore,
            tenetur, magnam dolores adipisci consequatur in, deserunt harum
            facilis impedit reiciendis!
          </animated.div>
          <animated.div className={classNames(style.item, style.contact_button)} style={fourthSpring}>
            Contact Me
          </animated.div>
        </div>
        <div className={style.user_image}></div>
      </div>
    </Block>
  );
}
