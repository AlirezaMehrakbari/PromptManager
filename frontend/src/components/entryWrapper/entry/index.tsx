import TextInput from "@/components/common/textInput";
import Button from "@/components/common/button";
import useEntry from "@/components/entryWrapper/entry/_hooks/useEntry";

const Entry = ({onClose}: { onClose: (token: string) => void }) => {
    const {
        entryStatus,
        username,
        setUserName,
        password,
        setPassword,
        handleRegisterUser,
        setEntryStatus,
        handleLogInUser,
        setShowPassword,
        showPassword
    } = useEntry(onClose)
    const renderUI = () => {
        if (entryStatus === 'register') {
            return (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-[90%] lg:w-1/3">
                        <p className="text-3xl font-semibold">Sign up</p>

                        <form className="flex flex-col items-center justify-center space-y-4 pt-8">
                            <TextInput
                                title={'UserName'}
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <TextInput
                                title={'Password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <p
                                        className="text-xs cursor-pointer text-blue-500"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "hide" : "show"}
                                    </p>
                                }
                                type={showPassword ? 'text' : 'password'}
                            />

                            <Button
                                onClick={handleRegisterUser}
                                className={'px-4 py-3 mx'}
                                primary
                            >
                                Create Account
                            </Button>
                        </form>

                        <p className="mt-4 text-sm text-gray-600 text-center">
                            Already have an account?{" "}
                            <Button
                                onClick={() => setEntryStatus('logIn')}
                                className={'text-primary'}
                            >
                                Login
                            </Button>
                        </p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="w-full w-sm">
                        <p className="text-3xl font-semibold">Sign in</p>

                        <form className="flex flex-col items-center justify-center space-y-4 pt-8">
                            <TextInput
                                title={'UserName'}
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <TextInput
                                title={'Password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <p
                                        className="text-xs cursor-pointer text-blue-500"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "hide" : "show"}
                                    </p>
                                }
                                type={showPassword ? 'text' : 'password'}
                            />

                            <Button
                                onClick={handleLogInUser}
                                className={'px-4 py-3 mx'}
                                primary
                            >
                                Sign in
                            </Button>
                        </form>

                        <p className="mt-4 text-sm text-gray-600 text-center">
                            Don’t have an account?{" "}
                            <Button
                                onClick={() => setEntryStatus('register')}
                                className={'text-primary'}
                            >
                                Sign up
                            </Button>
                        </p>
                    </div>
                </div>
            )
        }
    }

    return (
        renderUI()
    );
}

export default Entry
