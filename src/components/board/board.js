import React from "react";
import style from "./board.module.css";

export const Board = () => {
  return (
    <section>
      <div className={style.board}>
        <svg viewBox="0, 0, 100, 100">
          <circle cx={25} cy={25} r={25} fill="#fff" />
        </svg>
      </div>
    </section>
  );
};
