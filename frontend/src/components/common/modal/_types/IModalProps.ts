import {Dispatch, ReactNode, SetStateAction} from "react";

export interface IModalProps {
    title?: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    children: ReactNode,
    className?: string,
    backDropClick?: boolean,
}