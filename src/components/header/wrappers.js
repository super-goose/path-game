import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  height: 2rem;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  font-size: 1.2rem;

  @media (orientation: landscape) {
    font-size: 3rem;
    height: 3rem;
  }
`;

const HeaderElement = styled.div`
  padding: 0.5em;
  display: flex;
  align-items: center;
`;

export const Instruction = styled(HeaderElement)`
  flex-grow: 1;
  padding-left: 1.5rem;
`;

export const Score = styled(HeaderElement)`
  width: 24vw;
  text-align: left;
  justify-content: flex-start;
`;

export const MenuButton = styled(HeaderElement)`
  width: 1.5em;
  height: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Hamburger = styled.div`
  height: 0.3em;
  width: 1.2em;
  background-color: var(--blackish);
  border: 1px solid var(--whitish);
  border-radius: 0.2em;
`;

export const MenuOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(32, 32, 32, 0.7);
  backdrop-filter: blur(8px);

  z-index: 5;
`;

export const MenuContainer = styled.div`
  z-index: 2;
  position: absolute;
  background-color: var(--accent-color);
  width: 75vw;
  max-width: 330px;
  right: 0;
  top: 2rem;
  cursor: pointer;

  @media (orientation: landscape) {
    max-width: 550px;
    top: 3rem;
  }
`;

export const MenuItem = styled.div`
  font-size: 1.5rem;
  height: 2em;
  border: 1px solid var(--blackish);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) {
    font-size: 2.5rem;
  }
`;
