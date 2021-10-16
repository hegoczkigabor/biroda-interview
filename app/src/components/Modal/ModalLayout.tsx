import styled from "styled-components";

interface OverlayProps {
  visible: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  left: 0;
  top: 0;
`;

export const ModalDialog = styled.div`
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 20px;
  background: white;
  min-height: 400px;
  position: fixed;
  border-radius: 2px;
  position: absolute;
  padding: 20px;
  width: 60%;
  left: 50%;
  top: 50%;
`;

export const DialogHeader = styled.div`
  padding-bottom: 20px;
  overflow: hidden;
  display: block;
`;

export const DialogHeaderTitle = styled.div`
  font-size: 21px;
  float: left;
`;

export const DialogHeaderClose = styled.div`
  cursor: pointer;
  font-size: 21px;
  float: right;
`;

export const DialogBody = styled.div`
  display: flex;
`;
