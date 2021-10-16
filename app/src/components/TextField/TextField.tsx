import { FC } from "react";
import styled from "styled-components";

const InputField = styled.input`
  background-color: #1f2224;
  border-radius: 6px;
  font-size: 18px;
  border: none;
  color: white;
  width: 100%;
  padding: 20px;
  &:hover,
  :focus {
    background-color: #181a1c;
  }
`;

export interface TextFieldProps {
  placeholder: string;
  onEnterKeyPressed: () => void;
  onChange: (value: string) => void;
}

export const TextField: FC<TextFieldProps> = ({
  placeholder,
  onChange,
  onEnterKeyPressed,
}) => (
  <InputField
    type="text"
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        onEnterKeyPressed();
      }
    }}
  />
);
