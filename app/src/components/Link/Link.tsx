import { Icon } from "components/Icon/Icon";
import { FC } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: #1470cc;
  &:hover {
    color: #0c5196;
  }
`;

export interface LinkProps {
  url?: string;
  icon?: string;
  label: string;
  openNewTab: boolean;
}

export const Link: FC<LinkProps> = ({ url, label, icon, openNewTab }) => {
  return (
    <StyledLink target={openNewTab ? "_blank" : ""} href={url}>
      {icon ? <Icon icon={icon} /> : ""} {label}
    </StyledLink>
  );
};
