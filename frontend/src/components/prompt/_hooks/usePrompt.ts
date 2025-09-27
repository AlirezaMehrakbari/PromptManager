import React, {useState} from 'react'
import {IPrompt} from "@/components/prompt/_types/IPrompt";
import {useMutation, useQuery} from "@tanstack/react-query";
import getPromptList from "@/components/prompt/_api/getPromptList";
import updatePrompt from "@/components/prompt/_api/updatePrompt";
import deletePrompt from "@/components/prompt/_api/deletePrompt";
import addPrompt from "@/components/prompt/_api/addPrompt";
import togglePromptFavorite from "@/components/prompt/_api/togglePromptFavorite";

const usePrompt = (isFavorite = false) => {
    const [selectedPromptInfo, setSelectedPromptInfo] = useState<IPrompt | null>(null)
    const [addPromptModalIsOpen, setAddPromptModalIsOpen] = useState(false)
    const [updatePromptModalIsOpen, setUpdatePromptModalIsOpen] = useState(false)

    const {data: promptList, isLoading, refetch} = useQuery({
        queryKey: ['promptList'],
        queryFn: () => getPromptList(isFavorite)
    })
    const updatePromptMutation = useMutation({
        mutationKey: ['updatePrompt'],
        mutationFn: updatePrompt,
        onSuccess: () => {
            setUpdatePromptModalIsOpen(false)
            refetch()
        }
    })
    const deletePromptMutation = useMutation({
        mutationKey: ['deletePrompt'],
        mutationFn: deletePrompt,
        onSuccess: () => {
            refetch()
        }
    })

    const addPromptMutation = useMutation({
        mutationKey: ['addPrompt'],
        mutationFn: addPrompt,
        onSuccess: () => {
            setAddPromptModalIsOpen(false)
            refetch()
        }
    })
    const togglePromptFavoriteMutation = useMutation({
        mutationKey: ['togglePromptFavorite'],
        mutationFn: togglePromptFavorite,
        onSuccess: () => {
            refetch()
        }
    })

    const handleAddPrompt = (promptInfo: { title: string, description: string }) => {
        addPromptMutation.mutate(promptInfo)
    }

    const handleUpdatePrompt = (promptInfo: { title: string, description: string }) => {
        if (!selectedPromptInfo?.id) return
        const newData = {
            id: selectedPromptInfo?.id,
            ...promptInfo
        }
        updatePromptMutation.mutate(newData)
    }

    const handleDeletePrompt = (promptId: number) => {
        deletePromptMutation.mutate(promptId)
    }

    const handleSelectedPrompt = (promptInfo: IPrompt) => {
        setSelectedPromptInfo(promptInfo)
        setUpdatePromptModalIsOpen(true)
    }

    const handleTogglePromptFavorite = (promptId: number) => {
        togglePromptFavoriteMutation.mutate(promptId)
    }

    return {
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
    }
}

export default usePrompt
