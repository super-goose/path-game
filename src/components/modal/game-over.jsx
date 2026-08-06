import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getDensity,
  getDimensions,
  getDistance,
  getScore,
} from "@/state/slices/board";
import { setGameOver } from "@/state/slices/settings";

import {
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "./wrappers";
import { getHighScore, saveHighScore } from "@/utils/get-high-score";

export const GameOver = () => {
  const dispatch = useDispatch();
  const score = useSelector(getScore);
  const density = useSelector(getDensity);
  const distance = useSelector(getDistance);
  const dimensions = useSelector(getDimensions);
  const highScore = useRef(getHighScore(dimensions));

  useEffect(() => {
    if (score > highScore.current) {
      saveHighScore(dimensions, score);
    }
  }, [score]);

  const dismiss = useCallback(() => {
    dispatch(setGameOver(false));
  }, []);

  const newGame = useCallback(() => {
    dispatch({ type: "newgame" });
  }, []);

  const highScoreText =
    score >= highScore.current
      ? "new high score!"
      : `high score: ${highScore.current}`;

  return (
    <ModalOverlay onClick={dismiss}>
      <ModalContainer>
        <ModalHeader>Game Over</ModalHeader>
        <ModalContent style={{ marginTop: "2rem" }}>
          <div>your score is: {score}</div>
          <div style={{ textAlign: "right", marginTop: "1rem" }}>
            {highScoreText}
          </div>
        </ModalContent>
        <ModalContent>
          <p>board density: {density}</p>
          <p>path distance: {distance}</p>
        </ModalContent>
        <ModalFooter>
          <ModalButton onClick={newGame}>go again</ModalButton>
          <ModalButton onClick={dismiss}>dismiss</ModalButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};
