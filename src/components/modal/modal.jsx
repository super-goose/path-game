import React from "react";
import style from "./modal.module.css";

export const Modal = () => {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContainer}>
        <div>Game Over</div>
        <div>your score is: 666</div>
        <div>
          <button>go again</button>
        </div>
        <div>empty space</div>
      </div>
    </div>
  );
};
