'use client'
import React, {useEffect} from 'react'
import Close from '@/assets/icons/close/icon.svg'
import * as motion from 'motion/react-client'
import {AnimatePresence} from 'framer-motion'
import {IModalProps} from "@/components/common/modal/_types/IModalProps";

const Modal: React.FC<IModalProps> = ({
                                          title,
                                          open,
                                          setOpen,
                                          children,
                                          className,
                                          backDropClick = true
                                      }) => {

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px]"
                    variants={{
                        visible: {opacity: 1},
                        hidden: {opacity: 0}
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={() => backDropClick && setOpen(false)}
                >
                    <motion.div
                        className={`bg-[#FEFEFE] rounded-lg overflow-auto z-50 ${className} px-6 py-4  w-[80%] md:w-[50%]
            `}
                        variants={
                            {
                                hidden: {scale: 0.5, opacity: 0},
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {type: 'spring', stiffness: 200, damping: 15}
                                },
                                exit: {scale: 0.5, opacity: 0, transition: {duration: 0.3}}
                            }
                        }
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className="font-medium py-4">{title}</p>

                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
