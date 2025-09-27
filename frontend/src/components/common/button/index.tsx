'use client'
import React from "react";
import {IButtonProps} from "@/components/common/button/_types/IButtonProps";
import * as motion from "motion/react-client"

const Button: React.FC<IButtonProps> = ({
                                            children,
                                            className = "",
                                            onClick,
                                            isLoading,
                                            disabled,
                                            type = "button",
                                            primary
                                        }) => {
    const primaryStyle = 'bg-primary rounded-lg text-xs font-semibold text-[#FFF]'


    return (

        <motion.button
            whileHover={(!disabled && !isLoading) ? {scale: 1.05} : undefined}
            whileTap={(!disabled && !isLoading) ? {scale: 0.9} : {x: [0, -3, 3, -3, 3, 0]}}
            transition={disabled ? {duration: 0.3} : undefined}
            type={type}
            className={`rounded-lg text-sm cursor-pointer ${className} ${(disabled || isLoading) && 'opacity-50'} ${primary && primaryStyle}`}
            onClick={(e) => (!disabled && !isLoading && onClick) && onClick(e)}
        >
            {isLoading ? '...' : children}
        </motion.button>
    );
};

export default Button;
