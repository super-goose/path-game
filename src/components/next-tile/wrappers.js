import styled from "styled-components";

export const NextTileSection = styled.section`
  display: flex;
  flex-direction: row;
  height: 150px;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
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
