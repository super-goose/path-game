import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { getDensity, getScore } from "@/state/slices/board";
import { setGameOver } from "@/state/slices/settings";

import style from "./modal.module.css";
import { ModalOverlay } from "./wrappers";

export const Modal = () => {
  const dispatch = useDispatch();
  const score = useSelector(getScore);
  const density = useSelector(getDensity);

  return (
    <ModalOverlay>
      <div className={style.modalContainer}>
        <div className={classNames([style.modalHeader, style.modalSection])}>
          Game Over
        </div>
        <div className={classNames([style.modalContent, style.modalSection])}>
          your score is: {score}
        </div>
        <div className={classNames([style.modalContent, style.modalSection])}>
          board density is: {density}
        </div>
        <div className={classNames([style.modalFooter, style.modalSection])}>
          <button
            className={style.modalButton}
            onClick={() => {
              dispatch({ type: "newgame" });
            }}
          >
            go again
          </button>
          <button
            className={style.modalButton}
            onClick={() => {
              dispatch(setGameOver(false));
            }}
          >
            dismiss
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
};
