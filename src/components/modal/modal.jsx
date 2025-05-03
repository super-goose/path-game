import React from "react";
import style from "./modal.module.css";
import { setGameOver } from "@/state/slices/settings";
import { useDispatch } from "react-redux";
import classNames from "classnames";

export const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.modalOverlay}>
      <div
        className={style.modalContainer}
        style={{ "--light-background": "#d1a97f" }}
      >
        <div className={classNames([style.modalHeader, style.modalSection])}>
          Game Over
        </div>
        <div className={classNames([style.modalContent, style.modalSection])}>
          your score is: 666
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({ action: "newgame" });
            }}
          >
            go again
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch(setGameOver(false));
            }}
          >
            dismiss
          </button>
        </div>
        <div>empty space</div>
      </div>
    </div>
  );
};
