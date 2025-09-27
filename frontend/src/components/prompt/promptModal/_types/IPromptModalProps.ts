import {Dispatch, SetStateAction} from "react";

export interface IPromptModalProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    titleDefaultValue?: string,
    descriptionDefaultValue?: string,
    title: string,
    onSubmit: (info: { title: string, description: string }) => void,
    isLoading?: boolean
}