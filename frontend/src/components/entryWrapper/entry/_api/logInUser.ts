import {PromptAPI} from "@/axiosInstance";

const logInUser = async (userInfo: { username: string, password: string }) => {
    const response = await PromptAPI.post('auth/login', {
        username: userInfo.username,
        password: userInfo.password
    })
    return response.data

}

export default logInUser
