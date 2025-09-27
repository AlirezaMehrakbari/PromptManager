import React from 'react'
import PromptCard from "@/components/prompt/promptCard";
import {IPromptListProps} from "@/components/prompt/promptList/_types/IPromptListProps";

const PromptList: React.FC<IPromptListProps> = ({data, onDelete, onUpdate, onFavorite}) => {
    return (
        <div
            className={'flex flex-col gap-y-4'}
        >
            {
                data?.map(prompt => {
                    return (
                        <PromptCard
                            key={prompt.id}
                            id={prompt.id}
                            title={prompt.title}
                            description={prompt.description}
                            isFavorite={prompt.favorite ?? false}
                            createDate={prompt.createdAt!}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                            onFavorite={onFavorite}
                        />

                    )
                })
            }
        </div>
    )
}

export default PromptList
