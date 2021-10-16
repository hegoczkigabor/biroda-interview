import { Icon } from "components/Icon/Icon";
import { FC } from "react";

import {
  DialogBody,
  DialogHeader,
  DialogHeaderClose,
  DialogHeaderTitle,
  ModalDialog,
  Overlay,
} from "./ModalLayout";

export interface ModalProps {
  title?: string;
  visible: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
  title,
  visible,
  onClose,
  ...props
}) => {
  return (
    <Overlay visible={visible} onClick={() => onClose()}>
      <ModalDialog
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <DialogHeader>
          <DialogHeaderTitle>{title}</DialogHeaderTitle>
          <DialogHeaderClose onClick={() => onClose()} >
            <Icon icon="close" />
          </DialogHeaderClose>
        </DialogHeader>
        <DialogBody>{props.children}</DialogBody>
      </ModalDialog>
    </Overlay>
  );
};
