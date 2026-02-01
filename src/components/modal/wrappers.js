import styled from "styled-components";

export const ModalOverlay = styled.div`
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
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80vw;
  height: 60vh;
  padding: 1rem;

  border-radius: 1rem;
  border: 4px solid #222;
  box-shadow: 0px 0px 25px white;

  background-color: var(--light-background);

  @media (orientation: landscape) {
    width: 60vw;
  }
`;

const ModalSection = styled.div`
  background: var(--accent-color);
  padding: 1rem;
  border-radius: 0.75rem;
  border: 4px solid #222;
  width: 85vw;

  @media (orientation: landscape) {
    width: 63vw;
  }
`;

export const ModalHeader = styled(ModalSection)`
  font-size: 2.5rem;
  border-bottom-right-radius: 0;
`;

export const ModalContent = styled(ModalSection)`
  font-size: 1.5rem;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  flex-grow: 1;
  margin: 2rem 0;
`;

export const ModalFooter = styled(ModalSection)`
  display: flex;
  flex-direction: row;
  border-top-left-radius: 0;
  justify-content: space-around;
`;

export const ModalButton = styled.div`
  font-size: 1.5rem;
  background: var(--accent-color);
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  border: 4px solid #222;
  background: var(--highlight-color);
  color: #222;
`;
