import React from "react";
import { GameOver } from "./game-over";
import { Tutorial } from "./tutorial";
import { useSelector } from "react-redux";
import {
  getGameOver,
  getShowColors,
  getTutorial,
} from "@/state/slices/settings";
import { Colors } from "./colors";

export const Modal = () => {
  const gameOver = useSelector(getGameOver);
  const showTutorial = useSelector(getTutorial);
  const showColors = useSelector(getShowColors);

  if (gameOver) {
    return <GameOver />;
  }

  if (showTutorial) {
    return <Tutorial />;
  }

  if (showColors) {
    return <Colors />;
  }

  return null;
};
