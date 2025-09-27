import {MouseEventHandler, ReactNode} from "react";

export interface IButtonProps {
    children?: ReactNode;
    className?: string;
    isLoading?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    type?: "button" | "submit" | "reset",
    primary?: boolean
}