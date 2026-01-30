import React from "react";
import { ModalOverlay } from "./wrappers";
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
