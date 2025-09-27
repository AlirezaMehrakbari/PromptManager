'use client'
import React from 'react'
import PromptList from "@/components/prompt/promptList";
import usePrompt from "@/components/prompt/_hooks/usePrompt";

const FavoriteList = () => {
    const {
        handleDeletePrompt,
        handleSelectedPrompt,
        handleTogglePromptFavorite,
        promptList
    } = usePrompt(true)

    return (
        <div className={'max-md:pt-14'}>
            <p
                className={'text-[#675C5C] py-8'}
            >
                Favorite List
            </p>
            <PromptList
                onDelete={handleDeletePrompt}
                onUpdate={handleSelectedPrompt}
                onFavorite={handleTogglePromptFavorite}
                data={promptList}
            />
        </div>
    )
}

export default FavoriteList
