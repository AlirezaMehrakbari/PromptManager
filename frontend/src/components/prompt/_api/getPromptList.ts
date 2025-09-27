import {PromptAPI} from "@/axiosInstance";

const getPromptList = async (favorite = false) => {
    const response = await PromptAPI.get(`prompts${favorite ? '?favorite=true' : ''}`)
    return response.data

}

export default getPromptList
