import { Box, Button, Container, DropdownMenu, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-elevation-background-dark">
            <Box className="container mx-auto flex justify-between items-center px-8 py-5 border-b-elevation-elevation2-dark">
                <Box className="flex items-center">
                    <div className="mx-2 px-6 bg-white bg-opacity-5 rounded-lg shadow-inset-custom">Logo</div>
                    <nav className="hidden md:flex space-x-4 ps-6">
                        <Link href="#" className="hover:text-secondaryText text-sm font-semibold px-3">Dashboard</Link>
                        <Link href="#" className="hover:text-secondaryText text-sm font-semibold px-3">Tasks</Link>
                        <Link href="#" className="hover:text-secondaryText text-sm font-semibold px-3">Badges</Link>
                        <Link href="#" className="hover:text-secondaryText text-sm font-semibold px-3">Leaderboard</Link>
                        <Link href="#" className="hover:text-secondaryText text-sm font-semibold px-3">Connections</Link>
                    </nav>
                </Box>
                <Box className="flex items-center justify-end">
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button className="bg-elevation-elevation3-dark rounded-xl">
                                <Image src="/images/avatar.png" className="rounded-full" width={18} height={18} alt="icon" /> bongo.eth
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content variant="soft" className="bg-elevation-elevation3-dark border-0">
                            <DropdownMenu.Item className="text-sm font-semibold text-center hover:bg-elevation-elevation1-dark focus:bg-elevation-elevation1-dark"><Image src="/images/avatar.png" className="rounded-full" width={18} height={18} alt="icon" /> bongo.eth</DropdownMenu.Item>
                            <DropdownMenu.Item className="font-semibold text-sm text-center hover:bg-elevation-elevation1-dark focus:bg-elevation-elevation1-dark">SignOut <Image src="/images/icons/signout.svg" width={18} height={18} alt="icon" /></DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Button className="bg-transparent p-0 ms-2"><Image src="/images/icons/menu.svg" width={24} height={24} alt="" /></Button>
                    </div>
                </Box>
            </Box>
        </header>
    );
}
