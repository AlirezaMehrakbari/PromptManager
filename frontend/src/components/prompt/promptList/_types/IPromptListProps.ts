import {IPrompt} from "@/components/prompt/_types/IPrompt";

export interface IPromptListProps {
    data: IPrompt[],
    onDelete: (promptId: number) => void,
    onUpdate: (promptInfo: IPrompt) => void,
    onFavorite: (promptId: number) => void
}