import React, {useState} from 'react'
import Image from "next/image";
import StarIcon from '@/public/icons/starIcon/icon.svg'
import DeleteIcon from '@/public/icons/deleteIcon/icon.svg'
import EditIcon from '@/public/icons/editIcon/icon.svg'
import Button from "@/components/common/button";
import {IPromptCardProps} from "@/components/prompt/promptCard/_types/IPromptCardProps";
import {useMutation} from "@tanstack/react-query";
import updatePrompt from "@/components/prompt/_api/updatePrompt";
import deletePrompt from "@/components/prompt/_api/deletePrompt";
import PromptModal from "@/components/prompt/promptModal";
import {IPrompt} from "@/components/prompt/_types/IPrompt";

const PromptCard: React.FC<IPromptCardProps> = ({
                                                    id,
                                                    title,
                                                    description,
                                                    isFavorite,
                                                    createDate,
                                                    onDelete,
                                                    onUpdate,
                                                    onFavorite
                                                }) => {
    const date = new Date(createDate).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })

    const handleUpdatePrompt = () => {
        const data = {
            id,
            title,
            description,
            favorite: isFavorite,
        }

        onUpdate(data)
    }

    const handleDeletePrompt = () => {
        onDelete(id)
    }

    const handleTogglePromptFavorite = () => {
        onFavorite(id)
    }
    return (
        <>
            <div
                className={'rounded-xl bg-[#FFF] shadow-[0px_4px_7.7px_0px_rgba(0,0,0,0.08)] p-6'}
            >
                <div
                    className={'flex items-center justify-between'}
                >
                    <p
                        className={'text-primary font-bold'}
                    >
                        {title}
                    </p>
                    <Button
                        onClick={handleTogglePromptFavorite}
                    >
                        <StarIcon className={`w-[17px] h-[17px] ${isFavorite ? 'text-[#E3E300]' : 'text-[#E7E7E5]'}`}/>
                    </Button>
                </div>

                <p
                    className={'text-[#423E3E] pt-3'}
                >
                    {description}
                </p>

                <div className={'flex items-center justify-between gap-x-2 pt-4'}>
                    <p
                        className={'text-[#675c5c] text-xs'}
                    >{date}</p>
                    <div
                        className={'flex justify-end items-center gap-x-5'}
                    >
                        <Button
                            onClick={handleUpdatePrompt}
                            className={'flex items-center gap-x-1'}
                        >
                            <EditIcon width={14} height={14} className={'text-[#675c5c]'}/>
                            <p
                            className={'text-[#675c5c] text-xs'}
                            >
                                Edit
                            </p>

                        </Button>
                        <Button
                            onClick={handleDeletePrompt}
                            className={'flex items-center gap-x-1'}
                        >
                            <DeleteIcon width={14} height={14} className={'text-[#675c5c]'}/>

                            <p
                                className={'text-[#675c5c] text-xs'}
                            >
                                Delete
                            </p>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromptCard
