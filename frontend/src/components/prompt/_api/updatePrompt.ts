import {PromptAPI} from "@/axiosInstance";

const updatePrompt = async (promptInfo: { id: number, title: string, description: string }) => {
    const response = await PromptAPI.put(`prompts/${promptInfo.id}`, {
        title: promptInfo.title,
        description: promptInfo.description
    })
    return response.data

}

export default updatePrompt
