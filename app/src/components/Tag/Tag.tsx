import { FC } from "react";
import styled from "styled-components";

const StyledTag = styled.div`
  padding: 5px;
  font-size: 12px;
  border-radius: 5px;
  background-color:#181a1c;
`;

export interface TagProps {
  label: string;
}

export const Tag: FC<TagProps> = ({ label }) => (
  <StyledTag> {label} </StyledTag>
);
