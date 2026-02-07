import styled from "styled-components";

export const NextTileSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  margin: auto;
`;

export const NextTileOption = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ControlButtonButton = styled.button`
  font-size: 3rem;
  background-color: var(--blackish);
  color: var(--whitish);
  border-radius: 1rem;
  border: 2px solid var(--whitish);
  height: 5rem;

  justify-content: center;
  display: flex;
`;

export const TileSpaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  ${($rotatingCW) => ($rotatingCW ? "animation: rotatingCW 0.5s 1;" : "")}
  ${($rotatingCCW) => ($rotatingCCW ? "animation: rotatingCCW 0.5s 1;" : "")}
`;

export const TileSvgContainer = styled.div`
  background-color: var(--light-background);
  width: 64px;
  height: 64px;
`;
