import axios from "axios";

export const PromptAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Cache-Control": "no-cache",
    },
})

PromptAPI.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('userToken')
            window.location.reload();
        } else {
            console.log("API error:", error.response.data);
        }
        return Promise.reject(error);
    }
)

PromptAPI.interceptors.request.use(
    async (config) => {
        // send token to All Request
        const userToken = localStorage.getItem("userToken");
        if (userToken) {
            config.headers["Authorization"] = `Bearer ${userToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);