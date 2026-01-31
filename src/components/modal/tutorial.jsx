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
        <ModalContent>put an explanation here</ModalContent>
        <ModalFooter>
          <ModalButton onClick={dismiss}>dismiss</ModalButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};
