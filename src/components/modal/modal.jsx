import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { getDensity, getScore } from "@/state/slices/board";
import { setGameOver } from "@/state/slices/settings";

import style from "./modal.module.css";
import { ModalContainer, ModalOverlay } from "./wrappers";
import { GameOver } from "./game-over";

export const Modal = ({ gameOver, showTutorial }) => {
  if (gameOver) {
    return (
      <ModalOverlay>
        <GameOver />
      </ModalOverlay>
    );
  }

  return null;
};
