'use client'
import React, {useState} from 'react'
import {motion} from 'framer-motion'
import {menuItemsStatic} from "@/components/sideBar/menuItems.static"
import {usePathname, useRouter} from "next/navigation"
import Button from "@/components/common/button"
import LogOutIcon from '@/public/icons/logOutIcon/icon.svg'
import HamburgerIcon from '@/public/icons/hamburgerIcon/icon.svg'
import CloseIcon from '@/public/icons/closeIcon/icon.svg'
import {Variants} from "motion";

const SideBar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const handleLogOut = () => {
        localStorage.removeItem('userToken')
        window.location.reload()
    }

    const sidebarVariants: Variants = {
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        },
        closed: {
            x: -200,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        }
    };


    return (
        <>
            <div className="md:hidden fixed top-4 left-4 z-50">
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center p-3 bg-[#F1F6FF] rounded-md shadow-md"
                >
                    {isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                </Button>
            </div>

            <motion.div
                className="fixed left-0 top-0 h-dvh w-[165px] bg-[#F1F6FF] pl-6 z-40 md:hidden max-md:pt-12"

                variants={sidebarVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
            >
                <div className="pt-10">
                    <p className="font-medium text-xs">Prompt Manager</p>
                </div>

                <div className="flex flex-col gap-y-4 mt-9">
                    {menuItemsStatic.map(item => {
                        const isActive = pathname === item.pageUrl
                        return (
                            <Button
                                key={item.id}
                                onClick={() => {
                                    router.push(item.pageUrl)
                                    setIsOpen(false)
                                }}
                                className={`w-fit flex items-center gap-x-2 px-6 py-2 ${isActive && 'bg-[#FFF] shadow-[0px_4px_18.6px_0px_rgba(0,0,0,0.03)] rounded-lg'}`}
                            >
                                <item.icon width={18} height={18} className={`${isActive && 'text-primary'}`}/>
                                <p className={`text-xs text-[#171414] ${isActive && 'text-primary '}`}>
                                    {item.label}
                                </p>
                            </Button>
                        )
                    })}

                    <div className="absolute bottom-10">
                        <Button
                            onClick={handleLogOut}
                            className={'flex items-center gap-x-1 text-xs'}
                        >
                            <LogOutIcon width={25} height={25}/>
                            Sign Out
                        </Button>
                    </div>
                </div>
            </motion.div>

            <div className="hidden md:block fixed left-0 top-0 h-dvh w-[165px] bg-[#F1F6FF] pl-6">
                <div className="pt-10">
                    <p className="font-medium text-xs">Prompt Manager</p>
                </div>

                <div className="flex flex-col gap-y-4 mt-9">
                    {menuItemsStatic.map(item => {
                        const isActive = pathname === item.pageUrl
                        return (
                            <Button
                                key={item.id}
                                onClick={() => router.push(item.pageUrl)}
                                className={`w-fit flex items-center gap-x-2 px-6 py-2 ${isActive && 'bg-[#FFF] shadow-[0px_4px_18.6px_0px_rgba(0,0,0,0.03)] rounded-lg'}`}
                            >
                                <item.icon width={18} height={18} className={`${isActive && 'text-primary'}`}/>
                                <p className={`text-xs text-[#171414] ${isActive && 'text-primary '}`}>
                                    {item.label}
                                </p>
                            </Button>
                        )
                    })}

                    <div className="absolute bottom-10">
                        <Button
                            onClick={handleLogOut}
                            className={'flex items-center gap-x-1 text-xs'}
                        >
                            <LogOutIcon width={25} height={25}/>
                            Sign Out
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar
