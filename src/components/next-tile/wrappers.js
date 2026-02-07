import styled from "styled-components";

export const NextTileSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  margin: auto;

  @media (orientation: landscape) and (max-aspect-ratio: 2/1) {
    flex-direction: column;
  }
`;

export const NextTileOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) and (max-aspect-ratio: 2/1) and (min-aspect-ratio: 5/4) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
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

  @media (orientation: landscape) {
    height: 8rem;
  }

  @media (orientation: landscape) and (max-aspect-ratio: 3/2) {
    height: 5rem;
  }
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
  width: 96px;
  height: 96px;

  @media (orientation: landscape) {
    width: 128px;
    height: 128px;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (orientation: landscape) and (max-aspect-ratio: 3/2) {
    width: 96px;
    height: 96px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;
