import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #00a8e8;
  border-radius: 3px;
  line-height: 50px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  border: none;
  &:hover {
    background-color: #0d63a8;
  }
`;

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => (
  <StyledButton onClick={onClick}> Search </StyledButton>
);
