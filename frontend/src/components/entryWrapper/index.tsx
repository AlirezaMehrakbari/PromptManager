"use client";
import React, {useState, useEffect} from "react";
import Entry from "@/components/entryWrapper/entry";

const EntryWrapper = ({children}: { children: React.ReactNode }) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const [showLoginPage, setShowLoginPage] = useState(false);

    useEffect(() => {
        const jwtToken = localStorage.getItem("userToken");

        if (!jwtToken) {
            localStorage.removeItem("userToken");
            setShowLoginPage(true);
        }
        setIsInitialized(true);
    }, []);

    const handleLoginClose = (jwtToken: string) => {
        console.log('submit',jwtToken)
        setShowLoginPage(false);
        if (jwtToken !== '') {
            localStorage.setItem("userToken", jwtToken);
        }
    };

    if (!isInitialized) {
        return null;
    }


    if (showLoginPage) {
        return <Entry onClose={handleLoginClose}/>;
    }

    return <>{children}</>;
};

export default EntryWrapper;
