import React, {useEffect, useState} from 'react'
import Modal from "@/components/common/modal";
import TextInput from "@/components/common/textInput";
import Button from "@/components/common/button";
import {IPromptModalProps} from "@/components/prompt/promptModal/_types/IPromptModalProps";
import {showToast} from "@/components/notification";

const PromptModal: React.FC<IPromptModalProps> = ({
                                                      open,
                                                      setOpen,
                                                      titleDefaultValue,
                                                      descriptionDefaultValue,
                                                      title,
                                                      onSubmit,
                                                      isLoading
                                                  }) => {
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')

    useEffect(() => {
        if (titleDefaultValue !== titleValue) {
            setTitleValue(titleDefaultValue ?? "");
        }
        if (descriptionDefaultValue !== descriptionValue) {
            setDescriptionValue(descriptionDefaultValue ?? "");
        }
    }, [titleDefaultValue, descriptionDefaultValue]);


    const handleSubmitForm = () => {
        if (titleValue.trim() === '' || descriptionValue.trim() === '') {
            showToast('warning', 'Please complete the form!')
            return
        }
        setTitleValue('')
        setDescriptionValue('')
        const formInfo = {
            title: titleValue,
            description: descriptionValue
        }
        onSubmit(formInfo)
    }

    return (
        <Modal
            open={open}
            setOpen={setOpen}
            title={title}
        >
            <div
                className={'flex flex-col gap-y-4'}
            >
                <TextInput
                    title={'Title'}
                    value={titleValue}
                    onChange={(e) => setTitleValue(e.target.value)}

                />
                <TextInput
                    title={'Description'}
                    value={descriptionValue}
                    onChange={(e) => setDescriptionValue(e.target.value)}

                />
            </div>
            <div
                className={'flex justify-end items-scratch gap-x-2 pt-4'}
            >
                <Button
                    onClick={() => setOpen(false)}
                    className={'border-[1px] border-[#DEDEDE] px-4 py-3'}
                >
                    Cancel
                </Button>
                <Button
                    isLoading={isLoading}
                    onClick={handleSubmitForm}
                    primary
                    className={'flex items-center px-4 py-3'}
                >
                    Confirm
                </Button>
            </div>
        </Modal>
    )
}

export default PromptModal
