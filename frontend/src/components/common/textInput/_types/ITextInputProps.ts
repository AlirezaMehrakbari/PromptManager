import {ReactNode, Ref} from "react";

export interface ITextInputProps {
    startAdornment?: ReactNode,
    endAdornment?: ReactNode,
    placeholder?: string,
    title?: string,
    helperText?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    error?: boolean,
    type?: string,
    onBlur?: () => void,
    onFocus?: () => void,
    required?: boolean,
    disabled?: boolean,
    forceRTL?: boolean,
    readOnly?: boolean,
    ref?: Ref<any>,
    className?: string,
}