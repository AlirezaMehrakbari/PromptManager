import {PromptAPI} from "@/axiosInstance";

const deletePrompt = async (promptId: number) => {
    const response = await PromptAPI.delete(`prompts/${promptId}`)
    return response.data

}

export default deletePrompt
