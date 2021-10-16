import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export interface IconProps {
  icon: string;
}

export const Icon: FC<IconProps> = ({ icon }) => {
  switch (icon) {
    case "close":
      return <FontAwesomeIcon icon={faTimes} />;
    case "search":
      return <FontAwesomeIcon icon={faSearch} />;
    case "externalLink":
      return <FontAwesomeIcon icon={faExternalLinkAlt} />
    default:
      return <></>;
  }
};
