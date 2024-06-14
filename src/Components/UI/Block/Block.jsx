import React from 'react'
import style from "./style.module.css";

export default function Block({children, mode}) {
  return (
    <div className={style.content_block} style={{
        backgroundColor : mode === "dark"? "#020617" : "#111828"
    }}>
      {children}
    </div>
  )
}
