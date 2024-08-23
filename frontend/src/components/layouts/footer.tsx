import { Box, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <Box className="bg-elevation-elevation2-dark py-2">
            <Box className="container mx-auto md:px-8 px-4">
                <Box className="relative">
                    <Box className="absolute  items-center md:flex hidden">
                        <Link href="#" className="me-2"><Image src="/images/icons/discord.svg" width={32} height={32} alt="social" /></Link>
                        <Link href="#" className="me-2"><Image src="/images/icons/twitter.svg" width={32} height={32} alt="social" /></Link>
                        <Link href="#" className="me-2"><Image src="/images/icons/github.svg" width={32} height={32} alt="social" /></Link>
                    </Box>
                    <Box className="items-center justify-between mb-8 mt-6 flex md:hidden">
                        <Box className="mx-2 bg-white bg-opacity-5 rounded-lg shadow-inset-custom text-base font-medium px-12 py-2">Logo</Box>
                        <Box className="flex items-center">
                        <Link href="#" className="me-2"><Image src="/images/icons/discord.svg" width={40} height={40} alt="social" /></Link>
                        <Link href="#" className="me-2"><Image src="/images/icons/twitter.svg" width={40} height={40} alt="social" /></Link>
                        <Link href="#" className="me-2"><Image src="/images/icons/github.svg" width={40} height={40} alt="social" /></Link>
                    </Box>
                    </Box>
                    <Box className="items-center justify-between mb-6 flex md:hidden">
                        <Link href="#" className="me-2 text-base font-medium">Docs</Link>
                        <Link href="#" className="me-2 text-base font-medium">Blog</Link>
                        <Link href="#" className="me-2 text-base font-medium">Support</Link>
                        <Link href="#" className="me-2 text-base font-medium">Terms & Conditions</Link>
                    </Box>
                    <Box className="text-center mx-auto flex items-center md:bg-footer-gradient p-2 rounded-xl shadow-none md:shadow-inset-custom mb-6 md:mb-0" width="211px">
                        <Text className="text-sm me-2">Powered by</Text>
                        <Image src="/images/logo.svg" width={108} height={18} alt="logo" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
