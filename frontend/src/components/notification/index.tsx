import React from "react";
import {toast} from "react-hot-toast";
import {INotificationProps} from "@/components/notification/_types/INotificationProps";
import Button from "@/components/common/button";

const Notification: React.FC<INotificationProps> = ({type, message, toastId}) => {

    const iconMap = {
        success:
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986M22 3.99986L12 14.0099L9.00001 11.0099"
                    stroke="#079455" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ,
        error:
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3288_18488)">
                    <path
                        d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="#D92D20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_3288_18488">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        ,
        warning:
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.9998 7.99923V11.9992M11.9998 15.9992H12.0098M10.2898 2.85923L1.81978 16.9992C1.64514 17.3017 1.55274 17.6445 1.55177 17.9937C1.55079 18.343 1.64127 18.6864 1.8142 18.9898C1.98714 19.2931 2.2365 19.546 2.53748 19.7231C2.83847 19.9002 3.18058 19.9954 3.52978 19.9992H20.4698C20.819 19.9954 21.1611 19.9002 21.4621 19.7231C21.7631 19.546 22.0124 19.2931 22.1854 18.9898C22.3583 18.6864 22.4488 18.343 22.4478 17.9937C22.4468 17.6445 22.3544 17.3017 22.1798 16.9992L13.7098 2.85923C13.5315 2.56533 13.2805 2.32235 12.981 2.15371C12.6814 1.98508 12.3435 1.89648 11.9998 1.89648C11.656 1.89648 11.3181 1.98508 11.0186 2.15371C10.7191 2.32235 10.468 2.56533 10.2898 2.85923Z"
                    stroke="#DC6803" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ,
        info:
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3288_18532)">
                    <path
                        d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="#155EEF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_3288_18532">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        ,
    };

    const styles = {
        success: 'bg-[#ECFDF3] border-r-[5px] border-r-[#079455] border-solid',
        info: 'bg-[#EFF4FF] border-r-[5px] border-r-[#155EEF] border-solid',
        error: 'bg-[#FEF3F2] border-r-[5px] border-r-[#D92D20] border-solid',
        warning: 'bg-[#FFFAEB] border-r-[5px] border-r-[#DC6803] border-solid',
    }

    return (
        <div
            className={`flex items-center justify-between shadow-[0_4px_6px_rgba(0,0,0,0.1)] w-full max-w-[400px] text-sm font-[bold] text-[#101828] px-[15px] py-2.5 rounded-xl ${styles[type]}`}>
            <div className={'flex items-center gap-x-2'}>
                <p className={'p-0'}>{iconMap[type]}</p>
                <p className={'p-0 text-xs'}>{message}</p>
            </div>
            <Button
                type={'button'}
                className={'bg-none border-none text-[#707070] cursor-pointer text-lg'}
                onClick={() => toast.dismiss(toastId)}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L1 11M1 1L11 11" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </Button>
        </div>
    );
};

export const showToast = (type: 'success' | 'error' | 'warning' | 'info', message: string) => {
    toast.custom((t) => (
        <Notification
            type={type}
            message={message}
            toastId={t.id}
        />
    ));
};

export default Notification;
