import React from "react";
import { useDispatch } from "react-redux";

import { setTutorial } from "@/state/slices/settings";

import {
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "./wrappers";

export const GameOver = () => {
  const dispatch = useDispatch();

  return (
    <ModalContainer>
      <ModalHeader>Make a long path</ModalHeader>
      <ModalContent>put an explanation here</ModalContent>
      <ModalFooter>
        <ModalButton
          onClick={() => {
            dispatch(setTutorial(false));
          }}
        >
          dismiss
        </ModalButton>
      </ModalFooter>
    </ModalContainer>
  );
};
