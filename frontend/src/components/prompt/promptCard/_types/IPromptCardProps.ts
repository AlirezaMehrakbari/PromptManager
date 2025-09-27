import {IPrompt} from "@/components/prompt/_types/IPrompt";

export interface IPromptCardProps {
    title: string,
    description: string,
    isFavorite: boolean,
    id: number,
    onDelete: (promptId: number) => void,
    onUpdate: (promptInfo: IPrompt) => void,
    onFavorite: (promptId: number) => void,
    createDate: string
}