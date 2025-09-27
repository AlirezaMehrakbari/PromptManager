import {PromptAPI} from "@/axiosInstance";

const registerUser = async (userInfo: { username: string, password: string }) => {
    const response = await PromptAPI.post('auth/register', {
        username: userInfo.username,
        password: userInfo.password
    })
    return response.data

}

export default registerUser
