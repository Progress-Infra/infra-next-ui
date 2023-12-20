import * as React from 'react';
import { Modal as MModal, ModalProps as MModalProps } from '@mui/material';

export type ModalProps = MModalProps;

function Modal({ children, ...others }: ModalProps): JSX.Element {
    return <MModal {...others}>{children}</MModal>;
}

export default Modal;
