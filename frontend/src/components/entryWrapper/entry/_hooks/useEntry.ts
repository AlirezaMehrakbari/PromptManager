import {useState} from 'react'
import registerUser from "@/components/entryWrapper/entry/_api/registerUser";
import logInUser from "@/components/entryWrapper/entry/_api/logInUser";
import {useMutation} from "@tanstack/react-query";

const useEntry = (onClose: (token: string) => void) => {
    const [entryStatus, setEntryStatus] = useState<'logIn' | 'register'>('register')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const registerUserMutation = useMutation({
        mutationKey: ['registerUser'],
        mutationFn: registerUser,
        onSuccess: (result) => {
            onClose(result.user.token)
        },
    })
    const logInUserMutation = useMutation({
        mutationKey: ['logInUser'],
        mutationFn: logInUser,
        onSuccess: (result) => {
            onClose(result.token)
        }
    })

    const handleRegisterUser = () => {
        const userInfo = {
            username,
            password
        }
        registerUserMutation.mutate(userInfo)
    }
    const handleLogInUser = () => {
        const userInfo = {
            username,
            password
        }
        logInUserMutation.mutate(userInfo)
    }

    return {
        entryStatus,
        username,
        setUserName,
        password,
        setPassword,
        handleRegisterUser,
        setEntryStatus,
        handleLogInUser,
        showPassword,
        setShowPassword
    }
}

export default useEntry
