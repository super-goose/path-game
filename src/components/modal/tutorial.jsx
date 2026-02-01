import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { setTutorial } from "@/state/slices/settings";

import {
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PathColor,
} from "./wrappers";

export const Tutorial = () => {
  const dispatch = useDispatch();
  const dismiss = useCallback(() => {
    dispatch(setTutorial(false));
  }, [dispatch]);

  return (
    <ModalOverlay onClick={dismiss}>
      <ModalContainer>
        <ModalHeader>Make a long path</ModalHeader>
        <ModalContent>
          Choose tiles to make the path (<PathColor>this color</PathColor>) grow
          as long as you can. If it goes off the board, the game is over.
        </ModalContent>
        <ModalFooter>
          <ModalButton onClick={dismiss}>dismiss</ModalButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};
