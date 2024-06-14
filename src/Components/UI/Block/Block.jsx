import React from 'react'
import style from "./style.module.css";

export default function Block({children, mode,display, justifyContent,alignItems,padding, flex_dir}) {
  return (
    <div className={style.content_block} style={{
        backgroundColor : mode === "dark"? "#020617" : "#111828",
        display : display,
        padding:padding,
        justifyContent : justifyContent,
        alignItems : alignItems,
        flexDirection : flex_dir === "column"? "column" : ""
    }}>
      {children}
    </div>
  )
}
