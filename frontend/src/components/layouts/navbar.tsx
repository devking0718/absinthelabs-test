'use client'

import { useMainContext } from "@/context/mainContext";
import { RouteList } from "@/navigation/router";
import { Box, Button, Container, DropdownMenu, Flex } from "@radix-ui/themes";
import { Item } from "@radix-ui/themes/src/components/checkbox-group.primitive.jsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
    const pathname = usePathname();
    const { navToggle, setNavToggle } = useMainContext();
    return (
        <header className="bg-elevation-background-dark">
            <Box className="bg-elevation-elevation2-dark">
                <Box className="container mx-auto flex justify-between items-center md:px-8 px-4 py-5 border-b-elevation-elevation2-dark">
                    <Box className="flex items-center">
                        <div className="mx-2 px-6 bg-white bg-opacity-5 rounded-lg shadow-inset-custom">Logo</div>
                        <nav className="hidden md:flex space-x-4 ps-6">
                            {RouteList.map((item, index) => (
                                <Link key={index} href={item.path} className={`hover:text-secondaryText text-sm font-semibold px-3 ${pathname === item.path && `text-primary-hover-dark`}`}>{item.name}</Link>
                            ))}
                        </nav>
                    </Box>
                    <Box className="flex items-center justify-end">
                        <Button variant="soft" className={`text-sm font-semibold cursor-pointer text-text-secondary-dark bg-elevation-elevation2-dark rounded-full hidden md:flex border border-solid border-primary-hover-dark px-4 py-2 me-2 ${inter.className}`}>How It Works</Button>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button className={`bg-elevation-elevation3-dark rounded-xl cursor-pointer ${inter.className}`}>
                                    <Image src="/images/avatar.png" className="rounded-full" width={18} height={18} alt="icon" /> bongo.eth
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content variant="soft" className="bg-elevation-elevation3-dark border-0">
                                <DropdownMenu.Item className={`text-sm font-semibold text-center cursor-pointer hover:bg-elevation-elevation1-dark focus:bg-elevation-elevation1-dark ${inter.className}`}><Image src="/images/avatar.png" className="rounded-full" width={18} height={18} alt="icon" /> bongo.eth</DropdownMenu.Item>
                                <DropdownMenu.Item className={`font-semibold text-sm text-center cursor-pointer hover:bg-elevation-elevation1-dark focus:bg-elevation-elevation1-dark ${inter.className}`}>SignOut <Image src="/images/icons/signout.svg" width={18} height={18} alt="icon" /></DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <Button className="bg-transparent p-0 ms-2 cursor-pointer" onClick={() => setNavToggle(!navToggle)}><Image src="/images/icons/menu.svg" width={24} height={24} alt="" /></Button>
                        </div>
                    </Box>
                </Box>
            </Box>
            <Box className={`bg-elevation-background-dark container mx-auto md:px-8 px-4 mt-6  ${navToggle ? `flex transition duration-1000 ease-in-out` : `hidden transition duration-1000 ease-in-out`}`}>
                <Box className="flex justify-between items-center flex-wrap p-2 bg-elevation-elevation2-dark rounded-3xl">
                    {RouteList.map((item, index) => (
                        <Link key={index} href={item.path} className={`hover:text-secondaryText text-sm font-semibold p-3 ${pathname === item.path && `text-primary-hover-dark`}`}>{item.name}</Link>
                    ))}
                </Box>
            </Box>
        </header>
    );
}
