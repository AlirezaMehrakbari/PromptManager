import {PromptAPI} from "@/axiosInstance";

const togglePromptFavorite = async (promptId: number) => {
    const response = await PromptAPI.post(`prompts/${promptId}/favorite`)
    return response.data

}

export default togglePromptFavorite
