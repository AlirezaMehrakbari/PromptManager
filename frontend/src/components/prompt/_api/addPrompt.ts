import {PromptAPI} from "@/axiosInstance";

const addPrompt = async (promptInfo: { title: string, description: string }) => {
    const response = await PromptAPI.post('prompts', {
        title: promptInfo.title,
        description: promptInfo.description
    })
    return response.data

}

export default addPrompt
