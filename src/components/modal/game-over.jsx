import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { getDensity, getScore } from "@/state/slices/board";
import { setGameOver } from "@/state/slices/settings";

import style from "./modal.module.css";
import {
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "./wrappers";

export const GameOver = () => {
  const dispatch = useDispatch();
  const score = useSelector(getScore);
  const density = useSelector(getDensity);

  return (
    <ModalContainer>
      <ModalHeader>Game Over</ModalHeader>
      <ModalContent>your score is: {score}</ModalContent>
      <ModalContent>board density is: {density}</ModalContent>
      <ModalFooter>
        <ModalButton
          onClick={() => {
            dispatch({ type: "newgame" });
          }}
        >
          go again
        </ModalButton>
        <ModalButton
          onClick={() => {
            dispatch(setGameOver(false));
          }}
        >
          dismiss
        </ModalButton>
      </ModalFooter>
    </ModalContainer>
  );
};
