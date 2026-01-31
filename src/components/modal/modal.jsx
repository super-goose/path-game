import React from "react";
import { GameOver } from "./game-over";
import { Tutorial } from "./tutorial";
import { useSelector } from "react-redux";
import { getGameOver, getTutorial } from "@/state/slices/settings";

export const Modal = () => {
  const gameOver = useSelector(getGameOver);
  const showTutorial = useSelector(getTutorial);

  if (gameOver) {
    return <GameOver />;
  }

  if (showTutorial) {
    return <Tutorial />;
  }

  return null;
};
