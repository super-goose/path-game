import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  setColorScheme,
  setShowColors,
  setTutorial,
} from "@/state/slices/settings";

import {
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PathColor,
  Sample,
  SampleContainer,
  SampleElement,
} from "./wrappers";
import { COLORS } from "@/constants";
import { Tile } from "../tile";
import { TileSpace } from "../next-tile/tile-space";

const SAMPLE_TILE = {
  0: { out: 2, connected: false },
  1: { out: 6, connected: false },
  2: { out: 0, connected: false },
  3: { out: 5, connected: false },
  4: { out: 7, connected: false },
  5: { out: 3, connected: false },
  6: { out: 1, connected: false },
  7: { out: 4, connected: false },
  order: [7, 4, 0, 2, 5, 3, 6, 1],
};

export const Colors = () => {
  const dispatch = useDispatch();
  const dismiss = useCallback(() => {
    dispatch(setShowColors(false));
  }, [dispatch]);

  return (
    <ModalOverlay onClick={dismiss}>
      <ModalContainer>
        <ModalHeader>Color schemes</ModalHeader>
        <ModalContent>
          <SampleContainer>
            {Object.keys(COLORS).map((color, index) => (
              <Sample key={`sample-${color}`}>
                <SampleElement>{color}</SampleElement>
                <SampleElement style={COLORS[color]}>
                  <TileSpace
                    tile={SAMPLE_TILE}
                    index={index}
                    playTile={() => {
                      dispatch(setColorScheme(color));
                    }}
                    isRotatingCCW={false}
                    isRotatingCW={false}
                  />
                </SampleElement>
              </Sample>
            ))}
          </SampleContainer>
        </ModalContent>
        <ModalFooter>
          <ModalButton onClick={dismiss}>dismiss</ModalButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};
