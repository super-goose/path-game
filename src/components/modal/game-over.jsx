import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDensity, getDistance, getScore } from "@/state/slices/board";
import { setGameOver } from "@/state/slices/settings";

import {
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "./wrappers";

export const GameOver = () => {
  const dispatch = useDispatch();
  const score = useSelector(getScore);
  const density = useSelector(getDensity);
  const distance = useSelector(getDistance);

  const dismiss = useCallback(() => {
    dispatch(setGameOver(false));
  }, []);

  const newGame = useCallback(() => {
    dispatch({ type: "newgame" });
  }, []);

  return (
    <ModalOverlay onClick={dismiss}>
      <ModalContainer>
        <ModalHeader>Game Over</ModalHeader>
        <ModalContent>your score is: {score}</ModalContent>
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
