'use client'
import React, {ReactNode} from "react";
import {Toaster} from "react-hot-toast";

const ToastProvider = ({children}: { children: ReactNode }) => {


    return (
        <>
            {children}
            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        padding: "0",
                        background: "none",
                        boxShadow: "none",
                    },
                }}
            />
        </>
    );
};

export default ToastProvider;
