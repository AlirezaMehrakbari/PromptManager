'use client'
import React from 'react'
import PromptList from "@/components/prompt/promptList";
import TextInput from "@/components/common/textInput";
import SearchIcon from '@/public/icons/searchIcon/icon.svg'
import PlusIcon from '@/public/icons/plusIcon/icon.svg'
import Button from "@/components/common/button";
import PromptModal from "@/components/prompt/promptModal";
import usePrompt from "@/components/prompt/_hooks/usePrompt";

const Prompt = () => {
    const {
        setAddPromptModalIsOpen,
        handleDeletePrompt,
        handleSelectedPrompt,
        handleTogglePromptFavorite,
        promptList,
        addPromptModalIsOpen,
        handleAddPrompt,
        selectedPromptInfo,
        updatePromptModalIsOpen,
        setUpdatePromptModalIsOpen,
        handleUpdatePrompt,
        addPromptMutation,
        updatePromptMutation
    } = usePrompt()


    return (
        <>
            <div
                className={'flex justify-end pt-4 max-md:ml-14'}
            >
                <Button
                    onClick={() => setAddPromptModalIsOpen(true)}
                    primary
                    className={'flex items-center justify-center gap-x-1 col-span-1 py-3 px-4'}
                >
                    <PlusIcon width={14} height={14}/>
                    Add Prompt
                </Button>
            </div>
            <p
                className={'text-[#675C5C] py-8'}
            >
                Prompt List
            </p>
            <PromptList
                onDelete={handleDeletePrompt}
                onUpdate={handleSelectedPrompt}
                onFavorite={handleTogglePromptFavorite}
                data={promptList}
            />

            <PromptModal
                title={'Add Prompt'}
                open={addPromptModalIsOpen}
                setOpen={setAddPromptModalIsOpen}
                onSubmit={handleAddPrompt}
                isLoading={addPromptMutation.isPending}
            />
            <PromptModal
                titleDefaultValue={selectedPromptInfo?.title}
                descriptionDefaultValue={selectedPromptInfo?.description}
                title={'Update Prompt'}
                open={updatePromptModalIsOpen}
                setOpen={setUpdatePromptModalIsOpen}
                onSubmit={handleUpdatePrompt}
                isLoading={updatePromptMutation.isPending}
            />
        </>
    )
}

export default Prompt
